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
  background-color: #F6F7F9;
  overflow: scroll;
`;

const Main = styled.main`
  widht: 100%;
  height: 100%;
  overflow: scroll;
`;

export default function Layout({ children }: Props) {
  return (
    <Div>
      <Header />
      <Main>
        <div>{children}</div>
      </Main>
      <Footer />
    </Div>
  );
}
