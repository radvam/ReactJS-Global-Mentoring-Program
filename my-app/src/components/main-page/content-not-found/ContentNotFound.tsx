import React from "react";

import { refreshPage } from "./utils/ContentNotFoundUtils";

import {
  NO_MOVIE_FOUND,
  REFRESH_BUTTON_NAME,
} from "../../../constants/mainPageConstants";

import {
  ContentNotFoundWrapper,
  ContentNotFoundText,
  RefreshButton,
} from "./ContentNotFound.style";

export const ContentNotFound = (): React.ReactElement => {
  return (
    <ContentNotFoundWrapper>
      <ContentNotFoundText>{NO_MOVIE_FOUND}</ContentNotFoundText>
      <RefreshButton onClick={refreshPage}>{REFRESH_BUTTON_NAME}</RefreshButton>
    </ContentNotFoundWrapper>
  );
};
