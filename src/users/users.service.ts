import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult } from "typeorm";
import { UserEntity } from './Entity/users.entity';
import { UserRepository } from "./repository/users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: CreateUserDto) {
        return await this.userRepository.save(user);
    }

    async findAllUser() {
        return await this.userRepository.find();
    }
}
