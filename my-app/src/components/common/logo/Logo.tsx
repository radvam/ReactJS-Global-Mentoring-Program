import React from "react";
import { Link } from "react-router-dom";

import { LOGO_PART_1, LOGO_PART_2 } from "../../../constants/mainPageConstants";

import { LogoWrapper, ParagraphFirst, ParagraphSecond } from "./Logo.style";

export const Logo = (): React.ReactElement => (
  <Link to="/">
    <LogoWrapper>
      <ParagraphFirst>{LOGO_PART_1}</ParagraphFirst>
      <ParagraphSecond>{LOGO_PART_2}</ParagraphSecond>
    </LogoWrapper>
  </Link>
);
