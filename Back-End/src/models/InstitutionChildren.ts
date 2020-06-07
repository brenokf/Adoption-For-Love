import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institutionchildren')
class InstitutionChildren {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: number;

  @Column()
  password: string;
}

export default InstitutionChildren;
