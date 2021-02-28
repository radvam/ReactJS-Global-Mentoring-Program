import React from "react";

import { Header } from "../../components/main-page/header/Header";
import { Footer } from "../../components/main-page/footer/Footer";
import { MainContent } from "../../components/main-page/main-content/MainContent";

import { MainPageWrapper } from "./MainPage.style";

export const MainPage = () => {
  return (
    <MainPageWrapper>
      <Header />
      <MainContent />
      <Footer />
    </MainPageWrapper>
  );
};
