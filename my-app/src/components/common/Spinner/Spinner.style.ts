import { styled, theme } from '../../../theme';

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${theme.colors.lightGrey};
  border-top-color: ${theme.mainColor};
  border-radius: 50%;
  animation: loading 1s linear infinite;
  pointer-events: none;
  margin: 30px auto;

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;