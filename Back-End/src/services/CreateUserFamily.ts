//CreateFamily.ts//

import { getRepository } from 'typeorm';
import Family from '../models/RegisterFamily';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserFamily {
  public async execute({ name, email, password }: Request): Promise<Family> {
    const FamilyRepository = getRepository(Family);

    const userFamily = FamilyRepository.create({
      name,
      email,
      password,
    });

    await FamilyRepository.save(userFamily);
    return userFamily;
  }
}
export default CreateUserFamily;
