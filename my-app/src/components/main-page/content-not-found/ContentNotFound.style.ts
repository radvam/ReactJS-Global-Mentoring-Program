import { styled, theme } from "../../../theme";

export const ContentNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 500px);
  min-height: 180px;
`;

export const ContentNotFoundText = styled.p`
  font-family: "Lato-Light", sans-serif;
  font-size: 42px;
  letter-spacing: 0.5px;
  color: ${theme.colors.white};
  margin: 0;
  color: ${theme.colors.white};
  margin: 0;
`;

export const RefreshButton = styled.button`
  font-family: "Lato-Regular", sans-serif;
  width: fit-content;
  padding: 0 15px 0 15px;
  height: 40px;
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