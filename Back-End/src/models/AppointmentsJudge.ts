import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

Entity('appointmentsjudge');

class AppointmentsJudge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numberProcess: string;

  @Column()
  childrenName: string;

  @Column()
  judgeSentence: string;

  @Column()
  status: string;
}

export default AppointmentsJudge;
