import React from "react";

import { Footer } from "../../components/main-page/footer/Footer";
import { MainContentConnected, HeaderConnected } from "./MainPageConnectors";

import { MainPageWrapper } from "./MainPage.style";

export const MainPage = (): React.ReactElement => {
  return (
    <MainPageWrapper>
      <HeaderConnected />
      <MainContentConnected />
      <Footer />
    </MainPageWrapper>
  );
};
