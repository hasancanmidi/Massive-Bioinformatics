import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron karakter veri çekme işlemi
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchTerm) => {
    let characters = [];
    let nextPageUrl = 'https://rickandmortyapi.com/api/character';

    try {
      while (nextPageUrl) {
        const response = await axios.get(nextPageUrl, {
          params: {
            name: searchTerm,
            id: searchTerm,
            status: searchTerm,
            species: searchTerm,
            gender: searchTerm
          },
        });
        characters = characters.concat(response.data.results);
        nextPageUrl = response.data.info.next;
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }

    return characters;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
