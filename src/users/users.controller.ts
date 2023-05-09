import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAllUser(): Promise<string> {
        return '全てのユーザー情報を返す';
    }

    @Get('find')
    async findUser(): Promise<string> {
        return '特定のユーザーアカウントを返す'
    }

    @Post('create')
    async createUser(): Promise<string> {
        return 'ユーザーを作成し、その結果を返す'
    }

    @Delete()
    async deleteUser(): Promise<string> {
        return 'ユーザーを削除し、その結果を返す'
    }

    @Put()
    async updateUser(): Promise<string> {
        return 'ユーザー情報を更新し、その結果を返す'
    }
}
