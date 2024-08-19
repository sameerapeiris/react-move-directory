import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MoviesState, MovieApiResponse } from "./interfaces";

const initialState: MoviesState = {
  movies: [],
  popularMovies: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchMovies = createAsyncThunk<MovieApiResponse, number>(
  "movies/fetchMovies",
  async (page: number = 1) => {
    debugger
    const response = await axios.get<MovieApiResponse>(
     `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  }
);

export const searchMovies = createAsyncThunk<MovieApiResponse,{ query: string; page: number }>(
  "movies/searchMovies", async ({ query, page }) => {
  const response = await axios.get<MovieApiResponse>(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
});



const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.currentPage = action.meta.arg;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })

      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.currentPage = action.meta.arg.page;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to search movies";
      });
  },
});

export default movieSlice.reducer;
