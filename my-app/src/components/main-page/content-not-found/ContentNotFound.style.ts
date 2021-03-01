import { styled, theme } from "../../../theme";

export const ContentNotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 296px - 70px);
`;

export const ContentNotFoundText = styled.p`
  font-family: "Lato-Regular", sans-serif;
  font-size: 36px;
  color: ${theme.colors.white};
  margin: 0;
`;
