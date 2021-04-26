import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [value, setValue] = useState("");

  const searchPanelInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchPanelButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      history.push(`/search?search=${value}`);
    } else {
      history.push("/");
    }

    getMoviesDataRequest({ search: value });
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
