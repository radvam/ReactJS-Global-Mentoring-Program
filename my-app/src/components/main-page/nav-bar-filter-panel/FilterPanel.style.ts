import { styled, theme } from "../../../theme";

import { FilterItemProps } from "./FilterPanel.interface";

export const FilterPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 486px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  background-color: ${theme.colors.dark};
`;

export const FilterItem = styled.div<FilterItemProps>`
  font-family: "Lato-Regular", sans-serif;
  font-size: 17px;
  letter-spacing: 0.8px;
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${theme.mainColor}` : "none"};

  &:hover {
    color: ${theme.mainColor};
  }
`;
