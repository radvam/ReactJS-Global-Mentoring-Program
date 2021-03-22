import React, { FC, useMemo } from "react";

import { Spin } from "antd";
import { Spinner } from "../../common/Spinner/Spinner.style";

import { MovieContentProps } from "./MovieContent.interface";

import {
  MovieContentWrapper,
  PosterBlock,
  PosterImage,
  DescriptionBlock,
  MovieHeader,
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
  movieLoading,
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
    <Spin spinning={movieLoading} indicator={<Spinner />}>
      <MovieContentWrapper>
        <PosterBlock>
          <PosterImage src={poster_path} alt="poster" />
        </PosterBlock>
        <DescriptionBlock>
          <MovieHeader>
            <MovieTitle>{title}</MovieTitle>
            <MovieRating>{vote_average}</MovieRating>
          </MovieHeader>
          <MovieTagLine>{tagline}</MovieTagLine>
          <MovieDateAndDuration>
            <MovieRealiseDate>{movieRealiseDate}</MovieRealiseDate>
            {runtime && <MovieDuration>{`${runtime} min`}</MovieDuration>}
          </MovieDateAndDuration>
          <MovieDescription>{overview}</MovieDescription>
        </DescriptionBlock>
      </MovieContentWrapper>
    </Spin>
  );
};
