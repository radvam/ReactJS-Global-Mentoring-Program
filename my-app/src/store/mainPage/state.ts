export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface MovieForm {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
  runtime: number;
}

export interface SearchQuery {
  [name: string]: string | boolean | number;
}

export interface MainPageState {
  moviesLoading: boolean;
  moviesError: string;
  moviesData: Movie[];
  filter: string;
  sortDescending: boolean;
  sortBy: string;
  movieForm: Record<string, any>;
  [name: string]: any;
}
