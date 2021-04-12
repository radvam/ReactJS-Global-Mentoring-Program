import { styled, theme } from "../../../theme";

export const CrossWrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  cursor: pointer;

  &:hover div {
    background-color: ${theme.mainColor};
  }

  & > div {
    &:first-child {
      transform: rotate(-45deg);
    }

    &:last-child {
      transform: rotate(45deg);
    }
  }
`;

export const CrossIconItem = styled.div`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 2px;
  background-color: ${theme.colors.white};
`;
