import * as React from "react";
import { render, screen } from "@testing-library/react";

import { MovieContent } from "./MovieContent";

const movie = {
  id: 338970,
  title: "Tomb Raider",
  tagline: "Her legend begins",
  vote_average: 6.2,
  vote_count: 817,
  release_date: "2018-03-08",
  poster_path:
    "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
  overview:
    "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  budget: 94000000,
  revenue: 126025000,
  genres: ["Action", "Adventure"],
  runtime: 118,
};

const movieLoading = false;

describe("MovieContent", () => {
  test("should render", () => {
    const { asFragment } = render(
      <MovieContent movie={movie} movieLoading={movieLoading} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("title should be render", () => {
    render(<MovieContent movie={movie} movieLoading={movieLoading} />);

    expect(screen.queryByText("Tomb Raider")).toBeInTheDocument();
  });

  test("poster should be render", () => {
    render(<MovieContent movie={movie} movieLoading={movieLoading} />);

    expect(screen.getByRole("img").getAttribute("src")).toEqual(
      "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg"
    );
  });

  test("runtime should be equal 90 min", () => {
    const testMovie = { ...movie, runtime: 0 };

    render(<MovieContent movie={testMovie} movieLoading={movieLoading} />);

    expect(screen.getByText("90 min")).toBeInTheDocument();
  });
});
