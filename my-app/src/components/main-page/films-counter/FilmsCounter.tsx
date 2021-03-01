import React, { FC } from "react";

import PropTypes from "prop-types";

import { FilmsCounterProps } from "./FilmsCounter.interface";

import { FILMS_COUNTER_TEXT } from "../../../constants/mainPageConstants";

import { FilmsCounterWrapper } from "./FilmsCounter.style";

export const FilmsCounter: FC<FilmsCounterProps> = ({
  count,
}): React.ReactElement => (
  <FilmsCounterWrapper>
    {count}
    {FILMS_COUNTER_TEXT}
  </FilmsCounterWrapper>
);

// Use prop-types for task '4 - Use PropTypes':

FilmsCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

FilmsCounter.defaultProps = {
  count: 0,
};
