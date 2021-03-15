import React, { FC, useMemo } from "react";

import { MovieContentProps } from "./MovieContent.interface";

import {
  MovieContentWrapper,
  PosterBlock,
  PosterImage,
  DescriptionBlock,
  MovieTitle,
  MovieRating,
  MovieTagLine,
  MovieDateAndDuration,
  MovieRealiseDate,
  MovieDuration,
  MovieDescription,
} from "./MovieContent.style";

export const MovieContent: FC<MovieContentProps> = ({
  movie,
}): React.ReactElement => {
  const poster_path = movie?.poster_path;
  const title = movie?.title;
  const vote_average = movie?.vote_average;
  const tagline = movie?.tagline;
  const overview = movie?.overview;
  const release_date = movie?.release_date;
  const runtime = movie?.runtime;

  const movieRealiseDate = useMemo(() => release_date?.slice(0, 4), [
    release_date,
  ]);

  return (
    <MovieContentWrapper>
      <PosterBlock>
        <PosterImage src={poster_path} alt="poster" />
      </PosterBlock>
      <DescriptionBlock>
        <MovieTitle>
          {title}
          <MovieRating>{vote_average}</MovieRating>
        </MovieTitle>
        <MovieTagLine>{tagline}</MovieTagLine>
        <MovieDateAndDuration>
          <MovieRealiseDate>{movieRealiseDate}</MovieRealiseDate>
          <MovieDuration>{`${runtime} min`}</MovieDuration>
        </MovieDateAndDuration>
        <MovieDescription>{overview}</MovieDescription>
      </DescriptionBlock>
    </MovieContentWrapper>
  );
};
