import { styled, theme } from "../../../theme";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: fit-content;
  width: fit-content;
  color: ${theme.mainColor};
  cursor: pointer;
`;

export const ParagraphFirst = styled.p`
  font-family: 'PassionOne-Bold', sans-serif;
  line-height: 37px;
  letter-spacing: 0.7px;
  font-size: 23px;
  margin: 0;
`;

export const ParagraphSecond = styled.p`
  font-size: 21px;
  letter-spacing: 0.7px;
  margin: 0;
`;
