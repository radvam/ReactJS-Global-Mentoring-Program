import { styled, theme } from "../../../theme";

export const SearchPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  min-height: 145px;
`;

export const SearchPanelHeader = styled.p`
  align-self: flex-start;
  font-family: "Lato-Light", sans-serif;
  font-size: 42px;
  letter-spacing: 0.5px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  margin: 0;
`;

export const SearchPanelControl = styled.form`
  display: flex;
  height: 57px;
`;

export const SearchPanelInput = styled.input`
  font-size: 21px;
  flex-grow: 1;
  height: 54px;
  border-radius: 4px;
  margin-right: 14px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGrey + theme.transparency["95"]};
  border: none;
  outline: none;
`;

export const SearchPanelButton = styled.button`
  font-family: "Lato-Regular", sans-serif;
  width: 223px;
  height: 57px;
  background-color: ${theme.mainColor};
  color: ${theme.colors.white};
  font-size: 22px;
  border-radius: 4px;
  letter-spacing: 0.7px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mainColor + theme.transparency["85"]};
  }
`;
