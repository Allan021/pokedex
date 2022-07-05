import { PokemonApi } from "../api";
import { Pokemon, PokemonResponse, PokemonsResponse } from "../models";

export const getPokemonInfo = async (param: string): Promise<Pokemon> => {
  const { data } = await PokemonApi.get<PokemonResponse>(`pokemon/${param}`);

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    mainImage: data.sprites.other?.dream_world.front_default || "",
    sprites: [
      data.sprites.other?.dream_world.front_default || "",
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny,
    ],
  };

  return pokemon;
};

export const getPokemonList = async (): Promise<
  {
    name: string;
    url: string;
    id: number;
    image: string;
  }[]
> => {
  const { data } = await PokemonApi.get<PokemonsResponse>(
    "/pokemon/?limit=180"
  );

  const results = data.results;

  const pokemons = results.map((pokemon, index) => ({
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
    ...pokemon,
  }));

  return pokemons;
};
