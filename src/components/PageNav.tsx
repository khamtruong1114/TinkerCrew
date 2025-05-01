import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavStyle = styled.div`
  display: flex;
  min-width: 628px;
  height: 47px;
  justify-content: space-between;
  margin-right: 30px;
`;

const PageItems = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  width: 194px;
  height: 47px;

  font-weight: bold;
  font-size: 24px;
  color: whitesmoke;
  text-decoration: none;

  outline: none;
  cursor: pointer;
  transition: border-radius 0.3s ease, background-color 0.5s ease;

  &.active {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    color: white;
  }
`;

export default function PageNav() {
  return (
    <nav>
      <PageNavStyle>
        <PageItems
          to="/homepage"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </PageItems>
        <PageItems to="/about">About Us</PageItems>
        <PageItems to="/services">Services</PageItems>
      </PageNavStyle>
    </nav>
  );
}
