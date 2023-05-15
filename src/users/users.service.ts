import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/users.interface';
import { DeleteResult } from "typeorm";
import { UserEntity } from './Entity/users.entity';
import { UserRepository } from "./repository/users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    // 残りのCRUD操作の実装
    async findAllUser() {
        return await this.userRepository.find();
    }

    async finduser(id: User["id"]) {
        const response = await this.userRepository.findOneBy({ id });
        if (!response) throw new NotFoundException(`${id}に一致するデータが見つかりませんでした`);
        return response;
    }

    async updateUser(id: User["id"], username?: User["username"], email_adress?: User["email_adress"], password?: User["password"]) {
        const updated = await this.userRepository.update(id, {
            username: username,
            email_adress: email_adress,
            password: password
        });

        const updatedPost = await this.userRepository.findOneBy({ id });
        return !!updatedPost;

        throw new NotFoundException(`${id}に一致するデータが見つかりませんでした`);
    }

    async removeUser(id: User["id"]) {
        const response = await this.userRepository.delete(id);

        if(!response.affected) throw new NotFoundException(`${id}に一致するデータが見つかりませんでした`);
        return response;
    }
}
