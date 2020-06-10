import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('registerfamily')
class RegisterFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name_family: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default RegisterFamily;
