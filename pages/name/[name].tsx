import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";

import ImageViewer from "react-simple-image-viewer";
import { PokemonApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import { useOpenViewer } from "../../hooks";
import { Pokemon, PokemonsResponse, PokemonResponse } from "../../models";
import { getPokemonInfo, LocalFavorotes } from "../../utils";
interface Props {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
  const { id, name, sprites } = pokemon;
  const [isFavorite, setIsFavorite] = useState(
    LocalFavorotes.existInLocaleStorage(id)
  );
  const {
    closeImageViewer,
    currentImage,
    handleImageClick,
    isViewerOpen,
    openImageViewer,
    selectedImage,
  } = useOpenViewer();

  const handlefavorites = (id: number) => {
    LocalFavorotes.handleLocalFavorites(id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      particleCount: 100,
      zIndex: 999,
      angle: -100,
      spread: 100,
      origin: { x: 1, y: 0 },
    });
  };

  return (
    <MainLayout title={name.charAt(0).toUpperCase() + name.slice(1)}>
      <Grid.Container
        gap={2}
        css={{
          marginTop: "1rem",
        }}
      >
        <Grid xs={12} sm={4} md={4}>
          <Card hoverable>
            <Card.Body css={{ p: "30px" }}>
              <Card.Image
                src={sprites[selectedImage]}
                width="100%"
                height={200}
                alt={pokemon.name}
                onClick={() => {
                  openImageViewer(sprites.indexOf(sprites[selectedImage]));
                }}
              />
            </Card.Body>
          </Card>
        </Grid>
        {isViewerOpen && (
          <ImageViewer
            src={sprites || []}
            onClose={closeImageViewer}
            currentIndex={currentImage}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 1501,
            }}
          />
        )}

        <Grid xs={12} sm={8} md={8}>
          <Card>
            <Card.Header
              css={{ justifyContent: "space-between", display: "flex" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                ghost={!isFavorite}
                onClick={() => {
                  handlefavorites(id);
                }}
              >
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Spites</Text>
              <Container direction="row" display="flex">
                {sprites.map((sprite, ind) => (
                  <Image
                    key={sprite}
                    src={sprite}
                    width={100}
                    css={{
                      cursor: "pointer",
                      borderColor:
                        selectedImage === ind ? "primary.main" : "grey.400",
                    }}
                    height={100}
                    onClick={handleImageClick(ind)}
                    alt={pokemon.name}
                  />
                ))}
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};
export default PokemonPageByName;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await PokemonApi.get<PokemonsResponse>(
    "/pokemon/?limit=180"
  );

  const results = data.results;

  const paths = results.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
