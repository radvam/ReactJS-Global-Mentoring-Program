import { styled, theme } from "../../../theme";

export const HeaderWrapper = styled.div`
  background: url(${"./images/header.jpg"}) no-repeat center center / cover;
  box-shadow: inset 0px 0px 100px 100px ${theme.colors.black + theme.transparency["70"]};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 346px;
  border-bottom: 10px solid ${theme.colors.lightGrey};
  padding: 20px 50px;
  backdrop-filter: blur(2px);
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

export const ButtonAddMovies = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-family: "Lato-Regular", sans-serif;
  font-size: 21px;
  line-height: 44px;
  height: 46px;
  min-width: 177px;
  color: ${theme.mainColor};
  background-color: ${theme.colors.lightGrey + theme.transparency["95"]};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.lightGrey + theme.transparency["85"]};
  }
`;
