import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { CreatePokemonDto } from './create-pokemon.dto';
import { ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';

@Controller('pokedex')
export class PokedexController {
    constructor (private pokedexService: PokedexService){}

    @Get()
    @ApiOkResponse({description: 'Lista de Pokemons'})
    async getPokedex() {
        const pokedex = await this.pokedexService.getPokedex();
        return pokedex;
    }

    @Get(':pokemonId')
    @ApiOkResponse({description: 'Lista de 1 Pokemons'})
    async getPokemon(@Param('pokemonId') pokemonId) {
        const pokemon = await this.pokedexService.getPokemon(pokemonId);
        return pokemon;
    }

    @Post()
    @ApiCreatedResponse({description: 'Add 1 Pokemons'})
    async addPokemon(@Body() createPokemonDto: CreatePokemonDto): Promise<any>{
        const pokemon = await this.pokedexService.addPokemon(createPokemonDto);
        return pokemon;
    }

    @Delete()
    @ApiOkResponse({description: 'Remover 1 Pokemons'})
    async deletePokemon(@Query() query){
        const pokedex = await this.pokedexService.deletePokemon(query.pokemonId);
        return pokedex;
    }

}
