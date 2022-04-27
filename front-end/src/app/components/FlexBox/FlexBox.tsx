import React from "react";
import styled from "styled-components";

type FlexBoxProps = {
  children: React.ReactNode;
  direction?: string;
  wrap?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
  alignSelf?: string;
  width: string;
  height?: string;
  border?: string;
};

function FlexBox(props: FlexBoxProps) {
  return <StyledBox {...props}>{props.children}</StyledBox>;
}

FlexBox.defaultProps = {
  width: "100%",
  height: "100%",
  direction: "row",
};

const StyledBox = styled.div<FlexBoxProps>`
  display: flex;
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) =>
    props.alignContent ? `align-content: ${props.alignContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.flexBasis ? `flex-basis: ${props.flexBasis}` : "")};
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow}` : "")};
  ${(props) => (props.flexShrink ? `flex-shrink: ${props.flexShrink}` : "")};
  ${(props) => (props.alignSelf ? `align-self: ${props.alignSelf}` : "")};

  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
`;

export { FlexBox };
