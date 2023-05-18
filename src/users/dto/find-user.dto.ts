import { IsEmail, IsNotEmpty, MaxLength, IsString, MinLength } from "class-validator";

export class FindUserDTO {
    @IsNotEmpty()
    @MaxLength(20)
    @IsEmail()
    email_adress: string;

    @MaxLength(20)
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}