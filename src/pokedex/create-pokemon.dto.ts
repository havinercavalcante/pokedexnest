import { ApiProperty } from "@nestjs/swagger";

export class CreatePokemonDto{
    @ApiProperty({type: Number, description: 'ID'})
    readonly id: number;
    @ApiProperty({type: String, description: 'NOME DO POKEMON'})
    readonly title: string;
    @ApiProperty({type: String, description: 'DESCRIÇÃO DO POKEMON'})
    readonly description: string;
}