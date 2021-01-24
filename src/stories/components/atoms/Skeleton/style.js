import styled, { keyframes, css } from "styled-components";

const progress = keyframes`
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
`;

export const Wrapper = styled.div`
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${progress};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eff1f5 4%, #e3e3e3 25%, #eff1f3 36%);
  background-size: 1200px 100%;
  margin: 1em 0;
  border-radius: 4px;

  ${({ width, height }) => css`
    height: ${height};
    width: ${width};
  `}
`;
