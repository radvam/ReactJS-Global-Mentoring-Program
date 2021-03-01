import React, { FC } from "react";

import { FilmsCounterProps } from "./FilmsCounter.interface";

import { FILMS_COUNTER_TEXT } from "../../../constants/mainPageConstants";

import { FilmsCounterWrapper } from "./FilmsCounter.style";

export const FilmsCounter: FC<FilmsCounterProps> = ({ count }) => (
  <FilmsCounterWrapper>{count}{FILMS_COUNTER_TEXT}</FilmsCounterWrapper>
);
