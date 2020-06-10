import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dependentfamily')
class DependentFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name_dependents: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column()
  degreeofKinship: string;
}
export default DependentFamily;
