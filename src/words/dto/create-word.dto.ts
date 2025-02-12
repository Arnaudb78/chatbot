import { IsNotEmpty, IsString } from "class-validator";

export class CreateWordDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
