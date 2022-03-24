import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyles = styled.header`
  background-color: #e9e9e9;
  overflow: hidden;

  a {
    display: inline-block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      background-color: #ddd;
      color: var(--purple);
    }
  }

  input {
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: 16px;

    &:focus {
      color: var(--purple);
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link to="/">Search</Link>
      <Link to="/all">View All</Link>
      <Link to="/saved">Saved Beers</Link>
    </HeaderStyles>
  );
}
