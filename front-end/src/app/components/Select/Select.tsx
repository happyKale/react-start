import React from "react";
import styled from "styled-components";
import { FlexBox } from "../FlexBox";

type SelectProps = {
  optionList: Array<{ name: string; selected: boolean }>;
  label?: boolean;
  labelWidth?: string;
  labelHeight?: string;
  name?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  fontColor?: string;
  border?: string;
  radius?: string;
  margin?: string;
  boxSizing?: string;
};

function Select(props: SelectProps) {
  // prop destruction
  const { optionList, label, labelHeight, labelWidth, name } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return label ? (
    <FlexBox width={labelWidth} height={labelHeight} direction="column">
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledSelect {...props}>
        {optionList.map((item) => {
          return (
            <option selected={item.selected ? true : false}>{item.name}</option>
          );
        })}
      </StyledSelect>
    </FlexBox>
  ) : (
    <StyledSelect {...props}>
      {optionList.map((item) => {
        return (
          <option selected={item.selected ? true : false}>{item.name}</option>
        );
      })}
    </StyledSelect>
  );
}

Select.defaultProps = {
  width: "300px",
  height: "35px",
  margin: "0",
  padding: "0 0 0 10px",
  boxSizing: "border-box",
  border: "1px solid gray",
};

const StyledLabel = styled.label``;

const StyledSelect = styled.select<SelectProps>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontColor ? `color: ${props.fontColor}` : "")};
`;

export { Select };
