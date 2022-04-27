import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string;
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
};

function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.defaultProps = {
  width: "300px",
  height: "35px",
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
`;

export { Button };
