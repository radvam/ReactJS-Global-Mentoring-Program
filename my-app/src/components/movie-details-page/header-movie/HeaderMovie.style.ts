import { styled, theme } from "../../../theme";

export const HeaderMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 346px;
  border-bottom: 10px solid ${theme.colors.lightGrey};
  padding: 20px 50px 40px 50px;
  backdrop-filter: blur(2px);
`;

export const HeaderMovieTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  min-height: 46px;
`;

export const Search = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
  border: 2.5px solid ${theme.mainColor};
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 12px;
    right: 8px;
    width: 12px;
    height: 2.5px;
    background-color: ${theme.mainColor};
    border-radius: 2px;
    transform: rotate(138deg);
    cursor: pointer;
  }
`;
