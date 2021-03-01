import React from "react";

import { Logo } from "../../common/logo/Logo";
import { SearchPanel } from "../search-panel/SearchPanel";

import { ADD_MOVIE_BUTTON_NAME } from "../../../constants/mainPageConstants";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTop,
  ButtonAddMovies,
} from "./Header.style";

export const Header = (): React.ReactElement => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderTop>
        <Logo />
        <ButtonAddMovies>{ADD_MOVIE_BUTTON_NAME}</ButtonAddMovies>
      </HeaderTop>
      <SearchPanel />
    </HeaderContainer>
  </HeaderWrapper>
);
