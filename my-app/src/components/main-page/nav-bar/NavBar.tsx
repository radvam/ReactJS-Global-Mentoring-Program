import React from "react";

import { FilterPanelConnected, SortPanelConnected } from "../../../pages/main-page/MainPageConnectors";

import { NavBarWrapper } from "./NavBar.style";

export const NavBar = (): React.ReactElement => (
  <NavBarWrapper>
    <FilterPanelConnected />
    <SortPanelConnected />
  </NavBarWrapper>
);
