import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface MenuProps {
  list: string[];
  isActive: boolean;
}

const Menu: React.FC<MenuProps> = ({ list, isActive }) => {
  if (isActive) {
    return (
      <MenuWrapperSmall>
        {list.map((menu) => (
          <MenuItem key={menu}>
            <Link href={`/${menu}`}>{menu}</Link>
          </MenuItem>
        ))}
      </MenuWrapperSmall>
    );
  }

  return (
    <MenuWrapper>
      {list.map((menu) => (
        <MenuItem key={menu}>
          <Link href={`/${menu}`}>{menu}</Link>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.ul`
  display: flex;
  gap: 24px;
  color: white;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuWrapperSmall = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 330px;
  background-color: #6745ae;
  color: white;

  li {
    font-family: MonumentExtended;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    padding-left: 16px;
    margin-top: 32px;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`;

const MenuItem = styled.li`
  font-family: MonumentExtended;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`;
