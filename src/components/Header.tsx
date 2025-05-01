import PageNav from "./PageNav";
import Logo from "../assets/TinkerCrew.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.div<{ $show: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #53535a, #c4c2cb);
  padding: 20px;
  height: 110px;
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

interface HeaderProps {
  show: boolean;
}

export default function Header({ show }: HeaderProps) {
  return (
    <HeaderStyled $show={show}>
      <NavLink to="/homepage">
        <LogoStyled src={Logo} alt="tinkercrew" />
      </NavLink>
      <PageNav />
    </HeaderStyled>
  );
}
