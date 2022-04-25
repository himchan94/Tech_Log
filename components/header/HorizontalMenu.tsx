import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface MenuProps {
  list: string[];
}

const HorizontalMenu: React.FC<MenuProps> = ({ list }) => {
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

export default HorizontalMenu;

const MenuWrapper = styled.ul`
  display: flex;
  gap: 24px;
  color: white;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-family: MonumentExtended;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`;
