import { getRepository} from 'typeorm';
import Judge from '../models/RegisterJudge';

interface Request {
  name: string;
  enrollment: string;
  password: string;

}

class CreateUserJudge {
  public async execute({ name , enrollment, password}:Request): Promise<Judge>{
    const JudgeRepository = getRepository(Judge)

    const userJudge = JudgeRepository.create({
      name,
      enrollment,
      password,
    })

    await JudgeRepository.save(userJudge);
    return userJudge;
  }

}
export default CreateUserJudge;