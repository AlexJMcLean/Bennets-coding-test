import React from "react";
import styled from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import img from "../assets/beerBackground.png";

const BodyStyles = styled.div`
  min-height: calc(100vh - 45px);
  background-image: url(${img});
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BodyStyles>{children}</BodyStyles>
    </>
  );
}
