import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characterSlice';
import episodesReducer from './slices/episodeSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer
  },
});

export default store;
