import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

export const FavoriteCardPokemon = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card hoverable clickable onClick={handleClick}>
      <Card.Body css={{ p: "30px" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={200}
          alt={`pokemon ${id}`}
        />
      </Card.Body>
    </Card>
  );
};
