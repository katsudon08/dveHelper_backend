import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserEntity } from './Entity/users.entity';
import { UserRepository } from "./repository/users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: UserEntity) {
        return await this.userRepository.save(user);
    }

    async findAllUser() {
        return await this.userRepository.find();
    }

    async findOne(username: User['username'], password: User['password']) {
        return await this.userRepository.findBy({
            username: username,
            password: password
        });
    }
}
