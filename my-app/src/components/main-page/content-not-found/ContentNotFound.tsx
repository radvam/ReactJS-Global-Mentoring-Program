import React, { FC } from "react";

import { refreshPage } from "./utils/ContentNotFoundUtils";

import {
  NO_MOVIE_FOUND,
  REFRESH_BUTTON_NAME,
} from "../../../constants/mainPageConstants";

import { ContentNotFoundProps } from "./ContentNotFound.interface";

import {
  ContentNotFoundWrapper,
  ContentNotFoundText,
  RefreshButton,
} from "./ContentNotFound.style";

export const ContentNotFound: FC<ContentNotFoundProps> = ({
  loading,
}): React.ReactElement => {
  return (
    <ContentNotFoundWrapper>
      {!loading && (
        <>
          <ContentNotFoundText>{NO_MOVIE_FOUND}</ContentNotFoundText>
          <RefreshButton onClick={refreshPage}>
            {REFRESH_BUTTON_NAME}
          </RefreshButton>
        </>
      )}
    </ContentNotFoundWrapper>
  );
};
