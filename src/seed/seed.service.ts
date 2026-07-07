import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from '../hospitals/hospitals.entity';
import { Doctor } from '../docteurs/doctors.entity';
import { Pharmacy } from '../pharmacies/entities/pharmacy.entity';
import { RendezVous } from '../rendez-vous/entities/rendez-vous.entity';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Hospital)
    private hospitalRepo: Repository<Hospital>,
    @InjectRepository(Doctor)
    private doctorRepo: Repository<Doctor>,
    @InjectRepository(Pharmacy)
    private pharmacyRepo: Repository<Pharmacy>,
    @InjectRepository(RendezVous)
    private rendezVousRepo: Repository<RendezVous>,
  ) {}

  async onModuleInit() {
    const hospitalCount = await this.hospitalRepo.count();
    if (hospitalCount === 0) {
      await this.seed();
    }
  }

  async seed() {
    const hospital1 = this.hospitalRepo.create({
      name: 'Hôpital Principal de Dakar',
      address: 'Dakar',
      city: 'Dakar',
      country: 'Sénégal',
      phone: '+221 33 839 50 00',
    });

    const hospital2 = this.hospitalRepo.create({
      name: "Hôpital Aristide Le Dantec",
      address: "Dakar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 50 50",
    });

    const hospital3 = this.hospitalRepo.create({
      name: "Hôpital Fann",
      address: "Dakar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 51 00",
    });

    const hospital4 = this.hospitalRepo.create({
      name: "Hôpital Dalal Jamm",
      address: "Dakar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 52 00",
    });

    const hospital5 = this.hospitalRepo.create({
      name: "Hôpital Abass Ndao",
      address: "Dakar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 53 00",
    });

    const hospital6 = this.hospitalRepo.create({
      name: "Hôpital Pikine",
      address: "Pikine",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 54 00",
    });

    const hospital7 = this.hospitalRepo.create({
      name: "Hôpital Roi Baudouin",
      address: "Dakar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 55 00",
    });

    const hospital8 = this.hospitalRepo.create({
      name: "Hôpital de Grand Yoff",
      address: "Grand Yoff",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 56 00",
    });

    const hospital9 = this.hospitalRepo.create({
      name: "Hôpital de Ouakam",
      address: "Ouakam",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 57 00",
    });

    const hospital10 = this.hospitalRepo.create({
      name: "Hôpital de Mbour",
      address: "Mbour",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 58 00",
    });

    const hospital11 = this.hospitalRepo.create({
      name: "Hôpital de Rufisque",
      address: "Rufisque",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 59 00",
    });

    const hospital12 = this.hospitalRepo.create({
      name: "Hôpital de Keur Massar",
      address: "Keur Massar",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 60 00",
    });

    const hospital13 = this.hospitalRepo.create({
      name: "Hôpital de Yeumbeul",
      address: "Yeumbeul",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 61 00",
    });

    const hospital14 = this.hospitalRepo.create({
      name: "Hôpital de Diamniadio",
      address: "Diamniadio",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 62 00",
    });

    const hospital15 = this.hospitalRepo.create({
      name: "Hôpital de Hann",
      address: "Hann",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 63 00",
    });

    const hospital16 = this.hospitalRepo.create({
      name: "Hôpital de Liberté 6",
      address: "Liberté 6",
      city: "Dakar",
      country: "Sénégal",
      phone: "+221 33 839 64 00",
    });

    const hospitals = await this.hospitalRepo.save([
      hospital1,
      hospital2,
      hospital3,
      hospital4,
      hospital5,
      hospital6,
      hospital7,
      hospital8,
      hospital9,
      hospital10,
      hospital11,
      hospital12,
      hospital13,
      hospital14,
      hospital15,
      hospital16,
    ]);

    const doctor1 = this.doctorRepo.create({ firstName: "DR", lastName: "Diop", speciality: "Cardiologue", phone: "+221 77 123 45 01", email: "diop@doc.sn", hospital: hospitals[0] });
    const doctor2 = this.doctorRepo.create({ firstName: "DR", lastName: "Cissé", speciality: "Pédiatre", phone: "+221 77 123 45 02", email: "cisse@doc.sn", hospital: hospitals[1] });
    const doctor3 = this.doctorRepo.create({ firstName: "DR", lastName: "Fall", speciality: "Neurologue", phone: "+221 77 123 45 03", email: "fall@doc.sn", hospital: hospitals[2] });
    const doctor4 = this.doctorRepo.create({ firstName: "DR", lastName: "Gaye", speciality: "Oncologue", phone: "+221 77 123 45 04", email: "gaye@doc.sn", hospital: hospitals[3] });
    const doctor5 = this.doctorRepo.create({ firstName: "DR", lastName: "Sow", speciality: "Orthopédiste", phone: "+221 77 123 45 05", email: "sow@doc.sn", hospital: hospitals[4] });
    const doctor6 = this.doctorRepo.create({ firstName: "DR", lastName: "Ba", speciality: "Gynécologue", phone: "+221 77 123 45 06", email: "ba@doc.sn", hospital: hospitals[5] });
    const doctor7 = this.doctorRepo.create({ firstName: "DR", lastName: "Cissé", speciality: "Chirurgien", phone: "+221 77 123 45 07", email: "cisse2@doc.sn", hospital: hospitals[6] });
    const doctor8 = this.doctorRepo.create({ firstName: "DR", lastName: "Sylla", speciality: "Psychiatre", phone: "+221 77 123 45 08", email: "sylla@doc.sn", hospital: hospitals[7] });
    const doctor9 = this.doctorRepo.create({ firstName: "DR", lastName: "Kane", speciality: "Urgentiste", phone: "+221 77 123 45 09", email: "kane@doc.sn", hospital: hospitals[8] });
    const doctor10 = this.doctorRepo.create({ firstName: "DR", lastName: "Gning", speciality: "Médecin généraliste", phone: "+221 77 123 45 10", email: "gning@doc.sn", hospital: hospitals[9] });
    const doctor11 = this.doctorRepo.create({ firstName: "DR", lastName: "Ngom", speciality: "Cardiologue", phone: "+221 77 123 45 11", email: "ngom@doc.sn", hospital: hospitals[10] });
    const doctor12 = this.doctorRepo.create({ firstName: "DR", lastName: "Fall", speciality: "Pédiatre", phone: "+221 77 123 45 12", email: "fall2@doc.sn", hospital: hospitals[11] });
    const doctor13 = this.doctorRepo.create({ firstName: "DR", lastName: "Sy", speciality: "Dermatologue", phone: "+221 77 123 45 13", email: "sy@doc.sn", hospital: hospitals[12] });
    const doctor14 = this.doctorRepo.create({ firstName: "DR", lastName: "Diouf", speciality: "Radiologue", phone: "+221 77 123 45 14", email: "diouf@doc.sn", hospital: hospitals[13] });
    const doctor15 = this.doctorRepo.create({ firstName: "DR", lastName: "Sarr", speciality: "Anesthésiste", phone: "+221 77 123 45 15", email: "sarr@doc.sn", hospital: hospitals[14] });
    const doctor16 = this.doctorRepo.create({ firstName: "DR", lastName: "Ndiaye", speciality: "Ophtalmologue", phone: "+221 77 123 45 16", email: "ndiaye@doc.sn", hospital: hospitals[15] });

    await this.doctorRepo.save([
      doctor1,
      doctor2,
      doctor3,
      doctor4,
      doctor5,
      doctor6,
      doctor7,
      doctor8,
      doctor9,
      doctor10,
      doctor11,
      doctor12,
      doctor13,
      doctor14,
      doctor15,
      doctor16,
    ]);

    const pharmacy1 = this.pharmacyRepo.create({ name: "Pharmacie de la Gare", address: "Dakar, Gare Routière", latitude: 14.7167, longitude: -17.4677, openingTime: "08:00", closingTime: "22:00" });
    const pharmacy2 = this.pharmacyRepo.create({ name: "Pharmacie Centrale", address: "Dakar, Centre-ville", latitude: 14.6937, longitude: -17.4441, openingTime: "07:30", closingTime: "21:00" });
    const pharmacy3 = this.pharmacyRepo.create({ name: "Pharmacie Nord", address: "Dakar, Nord", latitude: 14.7200, longitude: -17.4600, openingTime: "08:00", closingTime: "20:00" });
    const pharmacy4 = this.pharmacyRepo.create({ name: "Pharmacie Sud", address: "Dakar, Sud", latitude: 14.6800, longitude: -17.4500, openingTime: "08:00", closingTime: "19:00" });
    const pharmacy5 = this.pharmacyRepo.create({ name: "Pharmacie Almadies", address: "Dakar, Almadies", latitude: 14.7400, longitude: -17.5000, openingTime: "08:00", closingTime: "23:00" });
    const pharmacy6 = this.pharmacyRepo.create({ name: "Pharmacie de Ouakam", address: "Ouakam", latitude: 14.7300, longitude: -17.4900, openingTime: "08:00", closingTime: "22:00" });
    const pharmacy7 = this.pharmacyRepo.create({ name: "Pharmacie Parcelles", address: "Parcelles Assainies", latitude: 14.7500, longitude: -17.4500, openingTime: "08:00", closingTime: "21:00" });
    const pharmacy8 = this.pharmacyRepo.create({ name: "Pharmacie de Pikine", address: "Pikine", latitude: 14.7600, longitude: -17.4000, openingTime: "08:00", closingTime: "20:00" });
    const pharmacy9 = this.pharmacyRepo.create({ name: "Pharmacie de Rufisque", address: "Rufisque", latitude: 14.7200, longitude: -17.3000, openingTime: "08:00", closingTime: "21:30" });
    const pharmacy10 = this.pharmacyRepo.create({ name: "Pharmacie de Mbour", address: "Mbour", latitude: 14.4200, longitude: -17.0000, openingTime: "07:00", closingTime: "22:00" });

    await this.pharmacyRepo.save([
      pharmacy1,
      pharmacy2,
      pharmacy3,
      pharmacy4,
      pharmacy5,
      pharmacy6,
      pharmacy7,
      pharmacy8,
      pharmacy9,
      pharmacy10,
    ]);

    const rdv1 = this.rendezVousRepo.create({
      nomPatient: "Diop",
      prenomPatient: "Awa",
      telephone: "+221771234567",
      dateRendezVous: "2026-04-01",
      heureRendezVous: "09:00",
      motif: "Hypertension artérielle",
      statut: "Planifié",
      age: 45,
      hopital: "Hôpital Principal de Dakar",
      specialiste: "Cardiologie",
      notes: "Suivi tension",
    });

    const rdv2 = this.rendezVousRepo.create({
      nomPatient: "Ba",
      prenomPatient: "Mamadou",
      telephone: "+221781234567",
      dateRendezVous: "2026-04-02",
      heureRendezVous: "10:00",
      motif: "Douleurs articulaires",
      statut: "Planifié",
      age: 32,
      hopital: "Hôpital Aristide Le Dantec",
      specialiste: "Orthopédie",
      notes: "Pré-opératoire",
    });

    const rdv3 = this.rendezVousRepo.create({
      nomPatient: "Sall",
      prenomPatient: "Fatou",
      telephone: "+221761234567",
      dateRendezVous: "2026-04-03",
      heureRendezVous: "11:00",
      motif: "Suivi grossesse",
      statut: "Planifié",
      age: 28,
      hopital: "Maternité de Pikine",
      specialiste: "Gynécologie",
      notes: "3ème mois",
    });

    await this.rendezVousRepo.save([rdv1, rdv2, rdv3]);
  }
}
