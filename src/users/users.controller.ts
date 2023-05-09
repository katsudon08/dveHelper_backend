import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAllUser(): string {
        return '全てのユーザー情報を返す';
    }

    @Get('find')
    findUser(): string {
        return '特定のユーザーアカウントを返す'
    }

    @Post('create')
    createUser(): string {
        return 'ユーザーを作成し、その結果を返す'
    }

    @Delete()
    deleteUser(): string {
        return 'ユーザーを削除し、その結果を返す'
    }

    @Put()
    updateUser(): string {
        return 'ユーザー情報を更新し、その結果を返す'
    }
}
