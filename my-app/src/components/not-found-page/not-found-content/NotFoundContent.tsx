import React, { FC } from "react";
import { Link } from "react-router-dom";

import { NotFoundText } from "../../../components/main-page/content-not-found/ContentNotFound.style";

import {
  NotFoundContentWrap,
  NotFoundButton,
  NotFoundImage,
} from "./NotFoundContent.style";

export const NotFoundContent: FC = () => (
  <NotFoundContentWrap>
    <NotFoundText>Page Not Found</NotFoundText>
    <NotFoundImage src="/images/404.jpg" alt="404" />
    <Link to="/">
      <NotFoundButton>GO BACK TO HOME</NotFoundButton>
    </Link>
  </NotFoundContentWrap>
);
