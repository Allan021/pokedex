import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoPokemon = () => {
  return (
    <Container
      css={{
        display: "grid",
        placeItems: "center",
        height: "calc(100vh - 100px)",
        alignself: "center",
      }}
    >
      <Text>No hay Pokemon</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={200}
        height={200}
        alt="No hay Pokemon"
      />
    </Container>
  );
};
