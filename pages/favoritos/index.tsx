import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts";
import { FavoritesPokemons } from "../../components/pokemon";
import { NoPokemon } from "../../components/ui";
import { LocalFavorotes } from "../../utils";

const FavoritosPage: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(LocalFavorotes.pokemonFavorites());
  }, []);

  return (
    <MainLayout title={"favoritos"}>
      {favorites.length === 0 ? (
        <NoPokemon />
      ) : (
        <FavoritesPokemons favorites={favorites} />
      )}
    </MainLayout>
  );
};

export default FavoritosPage;
