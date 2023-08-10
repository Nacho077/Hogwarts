import { IsString, IsNumber, IsBoolean } from "class-validator"

export class CreateCharacterDto {
    @IsString()
    name: string

    house: Enumerator<string>

    @IsNumber()
    age: number

    @IsBoolean()
    alive: boolean
}