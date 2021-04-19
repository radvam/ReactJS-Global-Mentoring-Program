import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { refreshPage } from "./utils/ContentNotFoundUtils";

import {
  NO_MOVIE_FOUND,
  REFRESH_BUTTON_NAME,
} from "../../../constants/mainPageConstants";

import { ContentNotFoundProps } from "./ContentNotFound.interface";

import {
  ContentNotFoundWrapper,
  NotFoundText,
  RefreshButton,
} from "./ContentNotFound.style";

export const ContentNotFound: FC<ContentNotFoundProps> = ({
  loading,
}): React.ReactElement => {
  const history = useHistory();

  const onClickHandler = (): void => {
    history.push("/");
    refreshPage();
  };

  return (
    <ContentNotFoundWrapper>
      {!loading && (
        <>
          <NotFoundText>{NO_MOVIE_FOUND}</NotFoundText>
          <RefreshButton onClick={onClickHandler}>
            {REFRESH_BUTTON_NAME}
          </RefreshButton>
        </>
      )}
    </ContentNotFoundWrapper>
  );
};
