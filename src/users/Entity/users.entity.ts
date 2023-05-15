import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// typeORMのドキュメントの確認
@Entity()
export class UserEntity {
    // !は割り当てアサーションの記法
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: string;

    @Column()
    username!: string;

    @Column()
    email_adress!: string;

    @Column()
    password!: string;
}