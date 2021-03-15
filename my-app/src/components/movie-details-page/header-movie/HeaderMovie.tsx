import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../common/logo/Logo";
import { MovieContent } from "../movie-content/MovieContent";

import cardListData from "../../../data/moviesData";
import { HeaderMovieProps } from "./HeaderMovie.interface";

import {
  HeaderWrapper,
} from "../../main-page/header/Header.style";

import { HeaderMovieContainer, HeaderMovieTop, Search } from "./HeaderMovie.style";

export const HeaderMovie: FC<HeaderMovieProps> = ({
  slugId,
}): React.ReactElement => {
  const movie = useMemo(() => cardListData.find(({ id }) => slugId === id), [
    slugId,
  ]);

  return (
    <HeaderWrapper>
      <HeaderMovieContainer>
        <HeaderMovieTop>
          <Logo />
          <Link to="/">
            <Search />
          </Link>
        </HeaderMovieTop>
        <MovieContent movie={movie} />
      </HeaderMovieContainer>
    </HeaderWrapper>
  );
};
