import { Image, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
export const NavBar = () => {
  const theme = useTheme();
  return (
    <header
      style={{
        backgroundColor: theme.theme?.colors.gray100.value,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0",
        paddingRight: "1rem",
      }}
    >
      <NextLink href="/" passHref>
        <Link
          css={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt="pokemon"
            width={70}
            height={70}
          />

          <Text css={{ fontWeight: "$bold", fontSize: "1.2rem" }}>P</Text>
          <Text>okemons</Text>
        </Link>
      </NextLink>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <NextLink href="/favoritos" passHref>
        <Link>
          <Text css={{ display: "inline" }}>Favoritos</Text>
        </Link>
      </NextLink>
    </header>
  );
};
