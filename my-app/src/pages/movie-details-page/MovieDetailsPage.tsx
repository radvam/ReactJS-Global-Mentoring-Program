import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderMovie } from "../../components/movie-details-page/header-movie/HeaderMovie";
import { Footer } from "../../components/main-page/footer/Footer";
import { MainContent } from "../../components/main-page/main-content/MainContent";

import { MovieDetailsPageWrapper } from "./MovieDetailsPage.style";

export const MovieDetailsPage = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { slugId }: Record<string, string> = useParams();

  return (
    <MovieDetailsPageWrapper>
      <HeaderMovie slugId={Number(slugId)} />
      <MainContent />
      <Footer />
    </MovieDetailsPageWrapper>
  );
};
