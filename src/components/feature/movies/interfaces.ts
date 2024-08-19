export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface MovieApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  
  export interface MoviesState {
    movies: Movie[];
    popularMovies: Movie[];
    currentPage: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
  }
  
  export interface MovieListProps {
    movies: Movie[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  