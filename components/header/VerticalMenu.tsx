import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface MenuProps {
  list: string[];
  _handleClick: () => void;
}

const VerticalMenu: React.FC<MenuProps> = ({ list, _handleClick }) => {
  return (
    <MenuWrapper>
      {list.map((menu) => (
        <MenuItem key={menu}>
          <Link href={`/${menu}`}>
            <a
              onClick={() => {
                _handleClick();
              }}>
              {menu}
            </a>
          </Link>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default VerticalMenu;

const MenuWrapper = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 330px;
  background-color: #6745ae;
  color: white;
`;

const MenuItem = styled.li`
  font-family: MonumentExtended;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  padding-left: 16px;
  margin-top: 32px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;
