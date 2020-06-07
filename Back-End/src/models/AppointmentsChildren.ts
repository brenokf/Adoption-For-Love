import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointmentschildren')
class AppointmentsChildren {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  DateBirthday: Date;

  @Column()
  age: number;

  @Column()
  socialSituation: string;

  @Column()
  historic: string;

  @Column()
  avatar: string;
}

export default AppointmentsChildren;
