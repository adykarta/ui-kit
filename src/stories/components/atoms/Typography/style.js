import styled from "styled-components";
import { textScales } from "../../../../theme";
export const Wrapper = styled.span`
    color:${({ color }) => (color ? color : "black")}};
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight :${({ weight }) => (weight ? weight : 300)};
    font-size:${({ size, type }) =>
      type === "heading" ? textScales[size * 2] : textScales[size]};
`;

export const WrapperAnchor = styled.a`
    color:${({ color }) => (color ? color : "black")}};
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight :${({ weight }) => (weight ? weight : 300)};
    font-size:${({ size }) => (size ? textScales[size] : textScales[100])};
    &:hover{
        cursor:pointer;
    }

`;
