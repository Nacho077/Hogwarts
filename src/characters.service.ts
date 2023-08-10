import { Injectable } from "@nestjs/common";
import { Character } from "./entities/character.entity";
import { CreateCharacterDto } from "./dtos/createCharacter.dto";

@Injectable()
export class CharactersService {
    repository: Character[]

    constructor() {
        this.repository = []
    }

    findAll(): Character[] {
        return this.repository
    }

    findById(id: number): Character {
        return new Character
    }

    findByHouse(house: string): Character[] {
        return this.repository
    }

    createCharacter(character: CreateCharacterDto): Character {
        return new Character
    }
}