import { styled, theme } from "../../../theme";

import { SortPanelWrapperProps } from "./SortPanel.interface";

export const SortPanelWrapper = styled.div<SortPanelWrapperProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Lato-Regular", sans-serif;
  font-size: 17px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  background-color: ${theme.colors.dark};
  min-width: 285px;

  &::after {
    content: "";
    position: absolute;
    ${({ topArrow }) => (topArrow ? `top: 6px` : `top: -1px`)};
    right: 5px;
    border: 6.5px solid transparent;
    ${({ topArrow }) =>
      topArrow
        ? `border-top: 6.5px solid ${theme.mainColor}`
        : `border-bottom: 6.5px solid ${theme.mainColor}`};
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const SortPanelTitle = styled.p`
  color: ${theme.colors.lightGrey};
  font-weight: 700px;
  margin: 0;
`;

export const SortPanelSelect = styled.select`
  padding-top: 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  appearance: none;
  padding-left: 15px;
  padding-right: 30px;
  font-size: 17px;
  letter-spacing: 1.1px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.dark};
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const SelectOption = styled.option``;
