import PageNav from "./PageNav";
import Logo from "../assets/TinkerCrew.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MenuBar from "../ui/MenuBar";
import { useState } from "react";

const HeaderStyled = styled.div<{ $show: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #53535a, #c4c2cb);
  padding: 20px;
  height: 64px;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: ${(props) => (props.$show ? "0" : "-200px")};
  left: 0;
  right: 0;
  z-index: 100;
  transition: top 0.4s ease-in-out;
`;

const LogoStyled = styled.img`
  margin-left: 20px;
`;

const MenuBarStyle = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

interface HeaderProps {
  show: boolean; //scroll to show header
}

export default function Header({ show }: HeaderProps) {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <HeaderStyled $show={show}>
      <NavLink to="/homepage">
        <LogoStyled src={Logo} alt="tinkercrew" />
      </NavLink>

      <MenuBarStyle
        onClick={() => {
          setMenuToggle((open) => !open);
        }}
      >
        <MenuBar open={menuToggle} />
      </MenuBarStyle>

      <PageNav
        open={menuToggle}
        onClick={() => {
          setMenuToggle((open) => !open);
        }}
      />
    </HeaderStyled>
  );
}
