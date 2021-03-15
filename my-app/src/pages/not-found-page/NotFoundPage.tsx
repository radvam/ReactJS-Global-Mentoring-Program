import React, { FC } from "react";
import { Link } from "react-router-dom";

import { NotFoundPageWrapper } from "./NotFoundPage.style";

export const NotFoundPage: FC = (): React.ReactElement => (
  <NotFoundPageWrapper>
    <h1>Page Not Found</h1>
    <h2>404</h2>
    <Link to="/">GO BACK TO HOME</Link>
  </NotFoundPageWrapper>
);
