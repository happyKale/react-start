import React from "react";
import styled from "styled-components";

type InputProps = {
  type: string;
  value?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
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

const StyledInput = styled.input<InputProps>`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 10px;
`;

export { Input };
