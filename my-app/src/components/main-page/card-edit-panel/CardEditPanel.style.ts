import { styled, theme } from "../../../theme";

import { EditPanelWrapperProps } from "./CardEditPanel.interface";

export const EditPanelWrapper = styled.div<EditPanelWrapperProps>`
  display: ${({ showPanel }) => (showPanel ? `flex` : "none")};
  flex-direction: column;
  position: absolute;
  top: 15px;
  right: 15px;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 190px;
  height: 110px;
  border-radius: 4px;
  background-color: ${theme.colors.dark};
  z-index: 3;

  color: ${theme.colors.white};
  font-family: "Lato-Light", sans-serif;
  font-size: 17px;
  line-height: 35px;
  letter-spacing: 0.8px;
`;

export const ButtonCLose = styled.div`
  align-self: flex-end;
  font-size: 20px;
  line-height: 25px;
  height: 26%;
  text-align: center;
  border-radius: 5px;
  width: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mainColor};
  }
`;

export const ButtonEdit = styled.div`
  padding-left: 30px;
  text-align: left;
  height: 32%;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mainColor};
  }
`;

export const ButtonDelete = styled.div`
  padding-left: 30px;
  height: 32%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mainColor};
  }
`;

export const DeleteModalParagraph = styled.p`
  font-family: "Lato-Light", sans-serif;
  color: ${theme.colors.white};
  font-size: 21px;
  letter-spacing: 0.7px;
  margin: 0;
`;
