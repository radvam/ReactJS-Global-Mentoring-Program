import React from "react";

import { NavBar } from "../nav-bar/NavBar";
import { FilmsCounter } from "../films-counter/FilmsCounter";
import { CardList } from "../card-list/CardList";

import cardListData from "./utils/MainContentUtils";

import { MainContentWrapper } from "./MainContent.style";

export const MainContent = () => (
  <MainContentWrapper>
    <NavBar />
    <FilmsCounter count={cardListData.length}/>
    <CardList cardListData={cardListData} />
  </MainContentWrapper>
);
