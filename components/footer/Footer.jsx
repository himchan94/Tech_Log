import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <Copyright>© UDD All rights reserved Powered by </Copyright>
    </FooterArea>
  );
};

export default Footer;

const FooterArea = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.mainColor};
`;

const Copyright = styled.div`
  font-family: Monument Extended;
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  color: white;
  letter-spacing: 0.105em;
  width: 164px;
  text-align: center;
  margin-top: 26px;
`;
