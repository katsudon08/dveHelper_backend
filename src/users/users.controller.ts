import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { FindUserDTO } from './dto/find-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body() user: CreateUserDTO) {
        return this.usersService.createUser(user);
    }

    @Get()
    findAllUser() {
        return this.usersService.findAllUser();
    }

    // ログイン時の情報をメアドとパスワードにする予定
    @Get('find')
    findUser(@Body() user: FindUserDTO) {
        return this.usersService.findUser(user.email_adress, user.password);
    }

}