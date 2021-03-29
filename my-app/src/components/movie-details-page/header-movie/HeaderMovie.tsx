import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../common/logo/Logo";
import { MovieContentConnected } from "../../../pages/movie-details-page/MovieDetailsPageConnectors";

import { HeaderMovieProps } from "./HeaderMovie.interface";

import {
  HeaderMovieWrapper,
  HeaderMovieContainer,
  HeaderMovieTop,
  Search,
} from "./HeaderMovie.style";

export const HeaderMovie: FC<HeaderMovieProps> = ({
  getMovieDataRequest,
  resetMainPageState,
  slugId,
}): React.ReactElement => {
  useEffect(() => {
    getMovieDataRequest(slugId);
  }, [getMovieDataRequest, slugId]);

  return (
    <HeaderMovieWrapper>
      <HeaderMovieContainer>
        <HeaderMovieTop>
          <Logo onClick={resetMainPageState} />
          <Link to="/">
            <Search onClick={resetMainPageState} />
          </Link>
        </HeaderMovieTop>
        <MovieContentConnected />
      </HeaderMovieContainer>
    </HeaderMovieWrapper>
  );
};
