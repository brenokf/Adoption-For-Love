import { getRepository } from 'typeorm';
import Judge from '../models/RegisterJudge';

interface Request {
  name: string;
  id_judge: string;
  email: string;
  password: string;
}

class CreateUserJudge {
  public async execute({
    name,
    id_judge,
    email,
    password,
  }: Request): Promise<Judge> {
    const JudgeRepository = getRepository(Judge);

    const userJudge = JudgeRepository.create({
      name,
      id_judge,
      email,
      password,
    });

    await JudgeRepository.save(userJudge);
    return userJudge;
  }
}
export default CreateUserJudge;
