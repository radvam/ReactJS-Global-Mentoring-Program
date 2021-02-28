import React from "react";

import {
  SEARCH_PANEL_BUTTON_NAME,
  SEARCH_PANEL_INPUT_PLACEHOLDER,
  SEARCH_PANEL_HEADER,
} from "../../../constants/mainPageConstants";

import {
  SearchPanelWrapper,
  SearchPanelHeader,
  SearchPanelControl,
  SearchPanelInput,
  SearchPanelButton,
} from "./SearchPanel.style";

export const SearchPanel = () => (
  <SearchPanelWrapper>
    <SearchPanelHeader>{SEARCH_PANEL_HEADER}</SearchPanelHeader>
    <SearchPanelControl>
      <SearchPanelInput
        type="text"
        placeholder={SEARCH_PANEL_INPUT_PLACEHOLDER}
      />
      <SearchPanelButton>{SEARCH_PANEL_BUTTON_NAME}</SearchPanelButton>
    </SearchPanelControl>
  </SearchPanelWrapper>
);
