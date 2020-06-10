import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('registerjudge')
class RegisterJudge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name_judge: string;

  @Column()
  email: string;
  
  @Column()
  id_judge: string;

  @Column()
  password:string

}
export default RegisterJudge;
