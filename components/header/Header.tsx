import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import useWindowWidthAndHeight from "../../hooks/useWindowWidthAndHeight";
import VerticalMenu from "./VerticalMenu";
import HorizontalMenu from "./HorizontalMenu";
import DarkmodeToggleBtn from "../darkmodToggleBtn/DarkmodeToggleBtn";
import { logo, hamburger } from "../../public/images/icon";

const menuList = ["about", "post", "project", "search"];

const Header = () => {
  const [windowX, windowY] = useWindowWidthAndHeight();
  const [toggle, setToggle] = useState(false);

  console.log(windowX);

  useEffect(() => {
    if (windowX > 900) {
      setToggle(false);
    }
  }, [windowX]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <HeaderOuter>
      <LeftWrapper>
        <Image src={logo} width={30} height={30} alt='logo' />
        <Title>UDD</Title>
      </LeftWrapper>
      {(!windowX || windowX > 900) && (
        <>
          <HorizontalMenu list={menuList} />
          <BtnWrapper>
            <DarkmodeToggleBtn />
          </BtnWrapper>
        </>
      )}
      {(!windowX || windowX <= 900) && toggle && (
        <VerticalMenu list={menuList} _handleClick={handleClick} />
      )}

      <RightWrapper>
        <Image
          src={hamburger}
          width={24}
          height={24}
          alt='hamburger'
          onClick={handleClick}
        />
      </RightWrapper>
    </HeaderOuter>
  );
};

export default Header;

const HeaderOuter = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 16px;
  background-color: ${(props) => props.theme.mainColor};
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  color: ${(props) => props.theme.textColor};
  z-index: 1;

  @media (max-width: 900px) {
    padding: 0 16px;
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  right: 30px;
  bottom: -2px;
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
