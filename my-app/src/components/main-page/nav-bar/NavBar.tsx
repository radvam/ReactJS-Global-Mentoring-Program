import React from "react";

import { FilterPanel } from "../nav-bar-filter-panel/FilterPanel";
import { SortPanel } from "../nav-bar-sort-panel/SortPanel";

import { NavBarWrapper } from "./NavBar.style";

export const NavBar = () => (
  <NavBarWrapper>
    <FilterPanel />
    <SortPanel />
  </NavBarWrapper>
);
