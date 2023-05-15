import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/users.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() user: User) {
        return this.usersService.createUser(user);
    }

    // 残りのCRUD操作のコントロールの実装
}