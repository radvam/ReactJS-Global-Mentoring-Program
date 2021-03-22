import { styled, theme } from "../../../theme";

export const MovieContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PosterBlock = styled.div`
  overflow: hidden;
  width: 290px;
  height: 400px;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  padding: 20px 50px 0 50px;
  align-self: flex-start;
`;

export const MovieHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  font-family: "Lato-Light", sans-serif;
  font-size: 54px;
  letter-spacing: 0.5px;
  color: ${theme.colors.white};
  margin: 0;
`;

export const MovieTitle = styled.p`
  text-align: left;
  margin: 0;
`;

export const MovieRating = styled.div`
  align-self: center;
  font-family: "Lato-Light", sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  color: ${theme.colors.green};
  border: 1px solid ${theme.colors.white};
  font-weight: 600;
  margin: 0 25px 0 25px;
  letter-spacing: 1.2px;
`;

export const MovieTagLine = styled.p`
  text-align: left;
  font-family: "Lato-Light", sans-serif;
  color: ${theme.colors.white + theme.transparency["70"]};
  font-size: 19px;
  letter-spacing: 0.7px;
`;

export const MovieDateAndDuration = styled.div`
  font-family: "Lato-Light", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: ${theme.mainColor};
  letter-spacing: 0.2px;
  display: flex;
  justify-content: space-between;
  width: 175px;
`;

export const MovieRealiseDate = styled.p``;

export const MovieDuration = styled.p``;

export const MovieDescription = styled(MovieTagLine)`
  margin: 0;
`;
