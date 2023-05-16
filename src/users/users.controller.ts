import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './Entity/users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body() user: UserEntity) {
        return this.usersService.createUser(user);
    }

    @Get()
    findAllUser() {
        return this.usersService.findAllUser();
    }

    @Get('find')
    findOne(@Body() user: UserEntity) {
        return this.usersService.findOne(user.username, user.password);
    }

}