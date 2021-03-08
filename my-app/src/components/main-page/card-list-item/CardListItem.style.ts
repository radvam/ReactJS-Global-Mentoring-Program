import { styled, theme } from "../../../theme";

import { ButtonOpenProps } from "./CardListItem.interface";

export const CardListItemWrapper = styled.div`
  width: 320px;
`;

export const CardImageBlock = styled.div`
  position: relative;
  display: grid;
  overflow: hidden;
  width: 320px;
  height: 450px;
`;

export const CardImage = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.white};
  padding: 20px 0 10px 0;
`;

export const CardName = styled.p`
  font-family: "Lato-Regular", sans-serif;
  color: ${theme.colors.white + theme.transparency["60"]};
  letter-spacing: 0.5px;
  font-size: 19px;
  margin: 0;
`;

export const CardDate = styled.p`
  font-family: "Lato-Regular", sans-serif;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: ${theme.colors.white + theme.transparency["60"]};
  border: 1px solid ${theme.colors.white + theme.transparency["60"]};
  border-radius: 3.5px;
  width: 64px;
  height: 24px;
  margin: 0;
`;

export const CardGenre = styled.div`
  font-family: "Lato-Light", sans-serif;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: ${theme.colors.white + theme.transparency["60"]};
  text-align: left;
`;

export const ButtonOpen = styled.div<ButtonOpenProps>`
  display: ${({ showOpen }) => (showOpen ? `flex` : "none")};
  align-content: center;
  justify-content: center;
  font-size: 42px;
  line-height: 8px;
  letter-spacing: -0.8px;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${theme.colors.dark + theme.transparency["40"]};
  z-index: 2;
  cursor: pointer;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.mainColor};
  }
`;
