import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from './Entity/users.entity';
import { UserRepository } from './repository/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository]
})
export class UsersModule {}
