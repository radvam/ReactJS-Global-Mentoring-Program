import { styled } from "../../../theme";

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-auto-rows: 1fr;
  justify-content: space-between;
  gap: 50px
`;
