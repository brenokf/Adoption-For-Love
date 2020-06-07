import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dependentfamily')
class DependentFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  degreeofKinship : string;
}
export default DependentFamily;
