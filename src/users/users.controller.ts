import { Body, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Get()
    findAllUser() {
        return this.usersService.findAllUser();
    }
}