import PageNav from "./PageNav";
import Logo from "../assets/TinkerCrew.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #53535a, #c4c2cb);
  padding: 20px;
  height: 110px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const LogoStyled = styled.img`
  margin-left: 20px 20px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <NavLink to="/homepage">
        <LogoStyled src={Logo} alt="tinkercrew" />
      </NavLink>
      <PageNav />
    </HeaderStyled>
  );
}
