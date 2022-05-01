import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Div = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f6f7f9;
  /* overflow: scroll; */
`;

const Main = styled.main``;

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
