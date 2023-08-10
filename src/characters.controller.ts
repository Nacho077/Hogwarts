import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { Character } from "./entities/character.entity";
import { CreateCharacterDto } from "./dtos/createCharacter.dto";

@Controller()
export class CharactersController {
    constructor(private charactersService: CharactersService) {}

    @Get()
    findAll(@Query() query: any): Character[] {
        return this.charactersService.findAll()
    }

    @Get(":id")
    findById(@Param("id") id: number): Character {
        return this.charactersService.findById(id)
    }

    @Post()
    createCharacter(@Body() CreateCharacterDto: CreateCharacterDto): Character {
        return this.charactersService.createCharacter(CreateCharacterDto)
    }
}