import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../rendez-vous/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../rendez-vous/dto/register.dto';
import { LoginDto } from '../rendez-vous/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // 🟢 REGISTER
  async register(dto: RegisterDto) {
    const userExist = await this.userRepo.findOneBy({ email: dto.email });

    if (userExist) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      email: dto.email,
      password: hashedPassword,
    });

    const savedUser = await this.userRepo.save(user);

    return {
      message: 'User created successfully',
      id: savedUser.id,
      email: savedUser.email,
    };
  }

  // 🔐 LOGIN
  async login(dto: LoginDto) {
    const user = await this.userRepo.findOneBy({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isValid = await bcrypt.compare(dto.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    return {
      message: 'Login successful',
      access_token: this.jwtService.sign(payload),
    };
  }
}
