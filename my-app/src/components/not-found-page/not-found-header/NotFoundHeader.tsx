import React, { FC } from "react";

import { Logo } from "../../common/logo/Logo";

import { NotFoundHeaderWrap } from "./NotFoundHeader.style";

export const NotFoundHeader: FC = () => (
  <NotFoundHeaderWrap>
    <Logo />
  </NotFoundHeaderWrap>
);
