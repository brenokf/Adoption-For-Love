import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointmentsinstituition')
class AppointmentsChildren {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  DateBirthday: string;

  @Column()
  age: string;

  @Column()
  socialSituation: string;

  @Column()
  historic: string;

  @Column()
  avatar: string;
}

export default AppointmentsChildren;
