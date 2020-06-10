import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institutionchildren')
class InstitutionChildren {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name_institution: string;

  @Column()
  email: string;

  @Column()
  cnpj: number;

  @Column()
  password: string;
}

export default InstitutionChildren;
