import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const favoriteIdIndex = state.data.indexOf(action.payload.id);

      if (favoriteIdIndex === -1) {
        state.data.push(action.payload.id);
      }
    },
    removeFavorite: (state, action) => {
      const favoriteIdIndex = state.data.indexOf(action.payload.id);

      if (favoriteIdIndex !== -1) {
        state.data.splice(favoriteIdIndex, 1);
      }
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
