import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/Entity/users.entity';

@Module({
  // 後にドキュメントで確認する
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'akihiko171101',
    database: 'dev_helper',
    entities: [UserEntity],
    // カラムが重なるエラー発生のため、同期を切る必要あり
    synchronize: false
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
