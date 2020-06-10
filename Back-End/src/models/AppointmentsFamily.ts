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
  motherCPF: string;

  @Column()
  fatherCPF: string;

  @Column()
  motherRG: string;

  @Column()
  fatherRG: string;

  @Column()
  address: string;

  @Column()
  motherCellPhone: string;

  @Column()
  fatherCellPhone: string;

  @Column()
  residencePhone: string;

  @Column()
  civilSituation: string;

  @Column()
  perCapitaIncome: string;

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
