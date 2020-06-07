import { getRepository } from 'typeorm';

import InstitutionChildren from '../models/InstitutionChildren';

interface Request {
  name: string;
  cnpj: number;
  password: string;
}

class CreateUserInstitution {
  public async execute({
    name,
    cnpj,
    password,
  }: Request): Promise<InstitutionChildren> {
    const institutionRep = getRepository(InstitutionChildren);

    const userInstitution = institutionRep.create({
      name,
      cnpj,
      password,
    });

    await institutionRep.save(userInstitution);
    return userInstitution;
  }
}
export default CreateUserInstitution;
