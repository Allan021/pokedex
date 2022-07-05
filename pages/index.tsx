import { Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import { MainLayout } from "../components/layouts/";
import { PokemonCard } from "../components/pokemon";
import { SmallPokemon } from "../models";
import { getPokemonList } from "../utils";

interface IndexPageProps {
  pokemons: SmallPokemon[];
}

const Home: NextPage<IndexPageProps> = (props) => {
  const { pokemons } = props;
  return (
    <MainLayout title="Static Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};
export async function getStaticProps(context: any) {
  return {
    props: { pokemons: await getPokemonList() }, // will be passed to the page component as props
  };
}
export default Home;
