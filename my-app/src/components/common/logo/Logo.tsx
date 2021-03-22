import React, { FC } from "react";
import { Link } from "react-router-dom";

import { LOGO_PART_1, LOGO_PART_2 } from "../../../constants/mainPageConstants";

import { LogoProps } from "./Logo.interface";

import { LogoWrapper, ParagraphFirst, ParagraphSecond } from "./Logo.style";

export const Logo: FC<LogoProps> = ({ onClick }): React.ReactElement => (
  <Link to="/">
    <LogoWrapper onClick={onClick}>
      <ParagraphFirst>{LOGO_PART_1}</ParagraphFirst>
      <ParagraphSecond>{LOGO_PART_2}</ParagraphSecond>
    </LogoWrapper>
  </Link>
);
