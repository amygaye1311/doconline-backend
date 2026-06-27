export class CreateDoctorDto {
  firstName: string;
  lastName: string;
  speciality: string;
  phone: string;
  email: string;
  hospitalId: number;
}

export { CreateDoctorDto as DoctorDto };