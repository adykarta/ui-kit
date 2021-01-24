import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  width: 30%;
  min-height: 50%;
  border-radius: 20px;
  box-shadow: 5px 5px 5px grey;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;
