import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointmentsfamily')
class AppointmentsFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  motherName: string;

  @Column()
  fatherName: string;

  @Column()
  motherCPF: number;

  @Column()
  fatherCPF: number;

  @Column()
  motherRG: string;

  @Column()
  fatherRG: string;

  @Column()
  address: string;

  @Column()
  motherCellPhone: number;

  @Column()
  fatherCellPhone: number;

  @Column()
  residencePhone: number;

  @Column()
  civilSituation: string;

  @Column()
  perCapitaIncome: number;

  @Column()
  dependents: string;

  @Column()
  childAdopt: string;

  @Column()
  childrenHistoric: string;

  @Column()
  documentationAdoption: string;
}
export default AppointmentsFamily;
