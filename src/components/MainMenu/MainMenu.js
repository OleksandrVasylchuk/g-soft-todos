import React, { useRef, useContext } from "react";
import { Header, Navbar, Title, MenuLink } from "./MainMenu.styled";
import styled, { css } from "styled-components";
import useOnClickOutside from "../../hooks/onClickOutside";
import { MenuContext } from "../../context/navState";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
  position: absolute;
  top: 100px;
  left: 113px;
  bottom: 0px;
  z-index: 1;
  display: block;
  display: flex;
  width: 1135px;
  height: 100px;
  max-width: 100%;
  padding-top: 25px;
  padding-right: 0px;
  align-items: stretch;
  background: rgb(102, 184, 108);
  background: radial-gradient(
    circle,
    rgba(102, 184, 108, 1) 0%,
    rgba(57, 103, 141, 1) 50%,
    rgba(86, 156, 120, 1) 73%,
    rgba(26, 46, 164, 1) 100%
  );
  transform: translateY(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <Header ref={node}>
      <Navbar>
        <HamburgerButton />
        <NavLink exact to="/" className={("link", "activeLink")}>
          <Title>Home</Title>
        </NavLink>
      </Navbar>
      <Menu open={isMenuOpen} className={("link", "activeLink")}>
        <NavLink to="/todoform">
          <MenuLink>create todo form</MenuLink>
        </NavLink>

        <NavLink to="/todos" className={("link", "activeLink")}>
          <MenuLink>todos</MenuLink>
        </NavLink>
      </Menu>
    </Header>
  );
};

export default MainMenu;
