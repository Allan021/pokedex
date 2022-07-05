import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}
const origin = typeof window !== "undefined" ? window.location.origin : "";
export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon static"}</title>
        <meta name="author" content={`Allan Castro`} />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />

        <meta name="keywords" content={`${title},pokemon,pokedex,next`} />
        <meta property="og:title" content={`This is the info about ${title}`} />
        <meta property="og:description" content={`Description of ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${origin}/img/anime.png`} />
      </Head>

      <NavBar />
      <main>{children}</main>
    </>
  );
};
