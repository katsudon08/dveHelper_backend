import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// typeORMのドキュメントの確認
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    username: string;

    @Column()
    email_adress: string;

    @Column()
    password: string;
}