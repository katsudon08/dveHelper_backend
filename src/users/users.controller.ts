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

    // 残りのCRUD操作のコントロールの実装

    @Get()
    findAllUser() {
        return this.usersService.findAllUser();
    }

    @Get('find')
    findUser(@Body() id: User["id"]) {
        return this.usersService.findUser(id);
    }

    @Patch()
    updateUser(
        @Body() id: User["id"],
        @Body() username?: User["username"],
        @Body() email_adress?: User["email_adress"],
        @Body() password?: User["password"]) {
            return this.usersService.updateUser(id, username, email_adress, password);
    }

    @Delete()
    deleteUser(@Body() id: User["id"]) {
        return this.usersService.deleteUser(id);
    }

}