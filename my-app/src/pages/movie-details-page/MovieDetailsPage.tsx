import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderMovieConnected } from "./MovieDetailsPageConnectors";
import { Footer } from "../../components/main-page/footer/Footer";
import { MainContentConnected } from "../main-page/MainPageConnectors";

import { MovieDetailsPageWrapper } from "./MovieDetailsPage.style";

export const MovieDetailsPage = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { slugId }: Record<string, string> = useParams();

  return (
    <MovieDetailsPageWrapper>
      <HeaderMovieConnected slugId={Number(slugId)} />
      <MainContentConnected />
      <Footer />
    </MovieDetailsPageWrapper>
  );
};
