import { styled, theme } from "../../../theme";

import { ButtonSecondary } from "../../../components/common/Button/Button.style";

export const NotFoundContentWrap = styled.div`
  background-color: ${theme.colors.dark};
  height: calc(100vh - 85px - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const NotFoundButton = styled(ButtonSecondary)`
  width: 185px;
`;

export const NotFoundImage = styled.img`
  width: 350px;
  height: 120px;
  object-fit: cover;
`;
