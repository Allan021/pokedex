import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritesPokemons = ({ favorites }: { favorites: number[] }) => {
  return (
    <Grid.Container gap={2}>
      {favorites.map((id) => (
        <Grid xs={12} sm={4} md={4} key={id}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
