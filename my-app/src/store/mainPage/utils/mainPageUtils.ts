import { MainPageState, Movie } from "../state";

export const prepareParamsObject = (mainPageState: MainPageState) => {
  const { filter, sortBy, sortDescending } = mainPageState;

  return {
    filter: filter === "all" ? "" : filter,
    sortBy: defineSortByValue(sortBy),
    sortOrder: sortDescending ? "desc" : "asc",
  };
};

const defineSortByValue = (sortBy: string): string => {
  switch (sortBy) {
    case "release date":
      return "release_date";
    case "rating":
      return "vote_average";
    case "id":
      return "id";
    default:
      return "";
  }
};

export const prepareMovieForRequest = (
  movie: Movie,
  movieForm: Record<string, any>
): Movie => {
  return {
    title: movieForm.title || movie.title,
    tagline: movie.tagline || " ",
    vote_average: Number(movie.vote_average),
    vote_count: Number(movie.vote_count),
    release_date: movieForm.release_date || movie.release_date,
    poster_path: movieForm.poster_path || movie.poster_path,
    overview: movieForm.overview || movie.overview,
    budget: Number(movie.budget),
    revenue: Number(movie.revenue),
    genres: movieForm.genres || movie.genres,
    runtime: movieForm.runtime || Number(movie.runtime),
    id: Number(movie.id),
  };
};
