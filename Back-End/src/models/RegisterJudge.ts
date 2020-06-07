import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('registerjudge')
class RegisterJudge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  enrollment: string;

  @Column()
  password:string

}
export default RegisterJudge;
