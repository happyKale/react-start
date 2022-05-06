import React from "react";
import styled from "styled-components";

type TitleProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string;
  color?: string;
  width?: string;
  margin?: string;
  padding?: string;
};
function Title(props: TitleProps) {
  // prop destruction
  const { type, children } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  switch (type) {
    case "h1":
      return <StyledH1 {...props}>{children}</StyledH1>;
    case "h2":
      return <StyledH2 {...props}>{children}</StyledH2>;
    case "h3":
      return <StyledH3 {...props}>{children}</StyledH3>;
    case "h4":
      return <StyledH4 {...props}>{children}</StyledH4>;
    case "h5":
      return <StyledH5 {...props}>{children}</StyledH5>;
  }
}

Title.defaultProps = {};

const StyledH1 = styled.h1<TitleProps>`
  text-align: center;
`;
const StyledH2 = styled.h2<TitleProps>`
  font-size: 2rem;
  text-align: center;
`;
const StyledH3 = styled.h3<TitleProps>`
  text-align: center;
`;
const StyledH4 = styled.h4<TitleProps>`
  text-align: center;
`;
const StyledH5 = styled.h5<TitleProps>`
  text-align: center;
`;

export { Title };
