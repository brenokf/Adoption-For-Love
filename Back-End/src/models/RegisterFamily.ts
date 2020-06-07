import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('registerfamily')
class RegisterFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  rja:string;

  @Column()
  password: string;
}

export default RegisterFamily;
