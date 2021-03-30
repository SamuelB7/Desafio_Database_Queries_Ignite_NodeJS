import { inject, injectable } from "tsyringe";
import { IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class FindUserByFullNameUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({first_name, last_name}: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    const user = await this.userRepository.findUserByFullName({first_name, last_name})

    return user
  }
}

export { FindUserByFullNameUseCase }