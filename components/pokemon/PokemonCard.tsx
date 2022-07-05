import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../models";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, image } = pokemon;

  const router = useRouter();

  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card hoverable clickable onClick={() => router.push(`/name/${name}`)}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image || ""} width="100%" height={140} alt={name} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text transform="capitalize" b>
              {name}
            </Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              # {id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
