const handleLocalFavorites = (id: number) => {
  const localFavorites = localStorage.getItem("favorites");
  let favorites: number[] = [];
  if (localFavorites) {
    favorites = JSON.parse(localFavorites || "[]");
  }
  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInLocaleStorage = (id: number): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const localFavorites = localStorage.getItem("favorites");
  const favorites: number[] = JSON.parse(localFavorites || "[]");

  return favorites.includes(id);
};

const pokemonFavorites = () =>
  JSON.parse(localStorage.getItem("favorites") || "[]");

const LocalFavorites = {
  handleLocalFavorites,
  existInLocaleStorage,
  pokemonFavorites,
};

export default LocalFavorites;
