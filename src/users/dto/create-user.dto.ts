import { IsNotEmpty, MaxLength, IsString, MinLength } from "class-validator";
import { FindUserDTO } from "./find-user.dto";

export class CreateUserDTO extends FindUserDTO {
    @MaxLength(20)
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username: string;
}