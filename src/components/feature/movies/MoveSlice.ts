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
const API_KEY = "e751164f5cc2d4cc22838d1d0f8bdbde";
const BASE_URL = 'https://api.themoviedb.org/3';
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
export const searchMovies = createAsyncThunk<
  MovieApiResponse,
  { query: string; page: number }
>("movies/searchMovies", async ({ query, page }) => {
  const response = await axios.get<MovieApiResponse>(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
});
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await axios.get<MovieApiResponse>(
      `${BASE_URL}/movie/popular?${API_KEY}`
    );
    return response.data.results;
  }
);

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
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
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
