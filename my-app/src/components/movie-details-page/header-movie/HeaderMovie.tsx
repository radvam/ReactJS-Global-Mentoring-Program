import React, { FC, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

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
  movieError,
  resetMovieDetailsPageState,
}): React.ReactElement => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      await getMovieDataRequest(slugId);
      if (movieError) {
        history.push("/*");
        resetMovieDetailsPageState();
      }
    })();
  }, [getMovieDataRequest, slugId, movieError]);

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
