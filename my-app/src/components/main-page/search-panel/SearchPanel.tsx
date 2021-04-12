import React, { useState, FC } from "react";

import {
  SEARCH_PANEL_BUTTON_NAME,
  SEARCH_PANEL_INPUT_PLACEHOLDER,
  SEARCH_PANEL_HEADER,
} from "../../../constants/mainPageConstants";

import { SearchPanelProps } from "./SearchPanel.interface";

import {
  SearchPanelWrapper,
  SearchPanelHeader,
  SearchPanelControl,
  SearchPanelInput,
  SearchPanelButton,
} from "./SearchPanel.style";

export const SearchPanel: FC<SearchPanelProps> = ({
  getMoviesDataRequest,
}): React.ReactElement => {
  const [value, setValue] = useState("");

  const searchPanelInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchPanelButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMoviesDataRequest({ search: value, searchBy: "title" });
  };

  return (
    <SearchPanelWrapper>
      <SearchPanelHeader>{SEARCH_PANEL_HEADER}</SearchPanelHeader>
      <SearchPanelControl onSubmit={searchPanelButtonHandler}>
        <SearchPanelInput
          type="text"
          placeholder={SEARCH_PANEL_INPUT_PLACEHOLDER}
          onChange={searchPanelInputHandler}
        />
        <SearchPanelButton>{SEARCH_PANEL_BUTTON_NAME}</SearchPanelButton>
      </SearchPanelControl>
    </SearchPanelWrapper>
  );
};
