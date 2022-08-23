import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  data: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    if (favoriteIds.indexOf(id) === -1) {
      setFavoriteIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
    }
  }

  function removeFavorite(id) {
    const favoriteIdIndex = favoriteIds.indexOf(id);

    if (favoriteIdIndex !== -1) {
      setFavoriteIds((currentFavoriteIds) =>
        currentFavoriteIds.filter((favoriteId) => favoriteId !== id)
      );
    }
  }

  const value = {
    data: favoriteIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
