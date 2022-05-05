import React from "react";
import styled from "styled-components";
import { FlexBox } from "../FlexBox";

type InputProps = {
  onChange?: React.FormEventHandler<HTMLDivElement>;
  type: string;
  value?: string;
  placeholder?: string;
  name?: string;
  labelName?: string;
  required?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  boxSizing?: string;
  border?: string;
  fontSize?: string;
  fontColor?: string;
  borderBottom?: string;
  borderTop?: string;
  radius?: string;
  isLabel?: boolean;
  labelWidth?: string;
  labelHeight?: string;
  labelFontSize?: string;
  cursor?: "pointer" | "text";
};

function Input(props: InputProps) {
  // prop destruction
  const { labelName, isLabel, labelWidth, labelHeight } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return isLabel ? (
    <FlexBox width={labelWidth} height={labelHeight} direction="column">
      <StyledLabel htmlFor={labelName}>{labelName}</StyledLabel>
      <StyledInput {...props} />
    </FlexBox>
  ) : (
    <StyledInput {...props} />
  );
}

Input.defaultProps = {
  width: "300px",
  height: "35px",
  margin: "0",
  padding: "0 0 0 10px",
  boxSizing: "border-box",
  border: "1px solid gray",
  cursor: "pointer",
};

const StyledLabel = styled.label``;

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  /* TODO: hover 고치기..  */
  ${(props) => (props.cursor ? `&:hover{cursor: ${props.cursor}}` : "")}
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom}` : ""};
  ${(props) => (props.borderTop ? `border-top: ${props.borderTop}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontColor ? `color: ${props.fontColor}` : "")};
`;

export { Input };
