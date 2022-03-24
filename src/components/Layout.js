import React from "react";
import styled from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";

const BodyStyles = styled.div``;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BodyStyles>{children}</BodyStyles>
    </>
  );
}
