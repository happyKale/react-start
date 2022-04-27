import React from "react";
import styled from "styled-components";

type InputProps = {
  type: string;
  value?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  margin?: string;
  padding?: string;
  boxSizing?: string;
  border?: string;
};

function Input(props: InputProps) {
  // prop destruction
  const required = props.required;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return required ? (
    <StyledInput required {...props} />
  ) : (
    <StyledInput {...props} />
  );
}

Input.defaultProps = {
  margin: "0",
  padding: "0 0 0 10px",
  boxSizing: "border-box",
  border: "1px solid gray",
};

const StyledInput = styled.input<InputProps>`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
`;

export { Input };
