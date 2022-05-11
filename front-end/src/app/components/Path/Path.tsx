import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type PathProps = {
  url: string;
  name: string;
};

function Path(props: PathProps) {
  // prop destruction
  const { url, name } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledLink to={url}>{name}</StyledLink>;
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #b261cd;
  }
`;

export { Path };
