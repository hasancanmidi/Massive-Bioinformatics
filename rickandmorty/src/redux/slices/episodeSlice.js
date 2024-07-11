import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron bölüm veri çekme işlemi
export const fetchEpisodes = createAsyncThunk(
  'episodes/fetchEpisodes',
  async (searchTerm) => {
    let episodes = [];
    let nextPageUrl = 'https://rickandmortyapi.com/api/episode';

    try {
      while (nextPageUrl) {
        const response = await axios.get(nextPageUrl, {
          params: {
            name: searchTerm
          },
        });
        episodes = episodes.concat(response.data.results);
        nextPageUrl = response.data.info.next;
      }
    } catch (error) {
      console.error('Error fetching episode:', error);
      throw error;
    }

    return episodes;
  }
);

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default episodesSlice.reducer;
