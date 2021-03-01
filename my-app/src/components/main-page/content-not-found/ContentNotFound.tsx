import React from "react";

import { NO_MOVIE_FOUND } from "../../../constants/mainPageConstants";

import {
  ContentNotFoundWrapper,
  ContentNotFoundText,
} from "./ContentNotFound.style";

export default class ContentNotFound extends React.Component {
  render(): React.ReactElement {
    return (
      <ContentNotFoundWrapper>
        <ContentNotFoundText>{NO_MOVIE_FOUND}</ContentNotFoundText>
      </ContentNotFoundWrapper>
    );
  }
}
