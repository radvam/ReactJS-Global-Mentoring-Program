import { styled, theme } from "../../../theme";
import { ButtonSecondary } from "../../../components/common/Button/Button.style";

export const ContentNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 500px);
  min-height: 180px;
`;

export const NotFoundText = styled.p`
  font-family: "Lato-Light", sans-serif;
  font-size: 38px;
  letter-spacing: 0.5px;
  color: ${theme.colors.white};
  margin: 0;
  color: ${theme.colors.white};
  margin: 0;
`;

export const RefreshButton = styled(ButtonSecondary)`
  width: 110px;
`;
