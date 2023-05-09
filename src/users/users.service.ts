import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    findAllUser() {
        return this.users;
    }

    findUser(user: User) {
        return this.users.filter(searchUser => searchUser.user_id === user.user_id);
    }

    createUser(user: User) {
        return this.users.push(user);
    }

    deleteuser(user: User) {
        return this.users.filter(deletedUser => deletedUser.user_id !== user.user_id);
    }

    updateUser(user: User) {
        const update = (oldUser: User, newUser: User) => {
            oldUser = newUser;
        }

        return this.users.map(updatedUser => (
            updatedUser.user_id===user.user_id && update(user, updatedUser)
        ));
    }
}
