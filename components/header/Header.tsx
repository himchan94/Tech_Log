import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Menu from "./Menu";
import Logo from "../../public/images/icon/logo.svg";
import Hamburger from "../../public/images/icon/hamburger.svg";
//import { logo, hamburger } from "../../public/images/icon";

const menuList = ["about", "post", "project", "search"];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <HeaderOuter>
      <LeftWrapper>
        <Logo />
        {/* <Image src={logo} width={30} height={30} alt='logo' /> */}
        <Title>UDD</Title>
      </LeftWrapper>
      <Menu list={menuList} isActive={toggle} />
      <RightWrapper>
        <Hamburger />
        {/* <Image
          src={hamburger}
          width={24}
          height={24}
          alt='hamburger'
          onClick={handleClick}
        /> */}
      </RightWrapper>
    </HeaderOuter>
  );
};

export default Header;

const HeaderOuter = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 16px;
  background-color: ${(props) => props.theme.mainColor};
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  color: ${(props) => props.theme.textColor};
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: MonumentExtended;
  font-size: 12px;
  font-weight: 900;
  line-height: 15px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-left: 13px;
`;

const RightWrapper = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;
