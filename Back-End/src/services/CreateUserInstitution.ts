import { getRepository } from 'typeorm';

import InstitutionChildren from '../models/RegisterInstitution';

interface Request {
  name: string;
  cnpj: number;
  email: string
  password: string;
}

class CreateUserInstitution {
  public async execute({
    name,
    cnpj,
    email,
    password,

  }: Request): Promise<InstitutionChildren> {
    const institutionRep = getRepository(InstitutionChildren);

    const userInstitution = institutionRep.create({
      name,
      cnpj,
      email,
      password,

    });

    await institutionRep.save(userInstitution);
    return userInstitution;
  }
}
export default CreateUserInstitution;
