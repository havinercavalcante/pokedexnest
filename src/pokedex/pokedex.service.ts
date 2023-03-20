import { HttpException, Injectable } from '@nestjs/common';
import { POKEDEX } from './pokedex';

@Injectable()
export class PokedexService {
    pokedex = POKEDEX;

    getPokedex(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.pokedex)
        })
    }

    getPokemon(pokemonId): Promise<any> {
        let id = Number(pokemonId);
        return new Promise(resolve => {
            const pokemon = this.pokedex.find(pokemon => pokemon.id === id)
            if(!pokemon){
                throw new HttpException('O pokemon com esse ID não existe', 404);
            }
            resolve(pokemon);
        })
    }

    addPokemon(pokemon): Promise<any> {
        return new Promise(resolve => {
            this.pokedex.push(pokemon);
            resolve(this.pokedex)
        })
    }

    deletePokemon(pokemonId): Promise<any> {
        let id = Number(pokemonId);
        return new Promise(resolve => {
            let index = this.pokedex.findIndex(pokemon => pokemon.id === id);
            if(index === -1){
                throw new HttpException('O pokemon com esse ID não existe', 404);
            }
            this.pokedex.splice(index, 1);
            resolve(this.pokedex)
        })
    }


}