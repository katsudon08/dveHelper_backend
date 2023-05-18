import { Injectable } from '@nestjs/common';
import { UserRepository } from "./repository/users.repository";
import { UserEntity } from "./entities/user.entity";
import { CreateUserDTO } from "./dto/create-user.dto";
import { FindUserDTO } from './dto/find-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: CreateUserDTO): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async findAllUser() {
        return await this.userRepository.find();
    }

    async findUser(email_adress: FindUserDTO["email_adress"], password: FindUserDTO['password']) {
        // エラーのバンドリングをする必要がある
        return await this.userRepository.findBy({
            email_adress: email_adress,
            password: password
        });
    }
}
