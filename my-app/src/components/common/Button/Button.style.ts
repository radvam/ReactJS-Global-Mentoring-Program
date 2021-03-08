import { styled, theme } from "../../../theme";

export const ButtonPrimary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  background-color: ${theme.mainColor};
  border-radius: 3px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-family: "Lato-Regular", sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.8px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mainColor + theme.transparency["85"]};
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${theme.colors.dark};
  border: 1px solid ${theme.mainColor};
  color: ${theme.mainColor};

  &:hover {
    background-color: ${theme.mainColor + theme.transparency["25"]};
  }
`;
