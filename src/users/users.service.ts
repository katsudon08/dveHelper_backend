import { Injectable } from '@nestjs/common';
import { User } from './interface/users.interface';
import { DeleteResult } from "typeorm";
import { UserEntity } from './Entity/users.entity';
import { UserRepository } from "./repository/users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }
}
