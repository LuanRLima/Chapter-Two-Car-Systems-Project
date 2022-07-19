import { inject } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

class CreateUserUsecase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({
            name,
            username,
            email,
            password,
            driver_license
        });

    }
}

export { CreateUserUsecase };