import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div<{ $open: boolean }>`
  display: flex;
  width: 700px;
  height: 47px;
  justify-content: space-between;
  gap: 50px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    display: ${(props) => (props.$open ? "flex" : "none")};
    height: 100vh;
    width: 50%;
    margin-right: 30px;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    gap: 50px;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 10;
    border-radius: 20px;
    animation: slide-in 0.1s linear 0.2s both;
    z-index: 9;
    @keyframes slide-in {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }
`;

const PageItems = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;

  border: none;
  border-radius: 5px;
  width: 220px;
  height: 80px;

  font-weight: bold;
  font-size: 30px;
  color: whitesmoke;
  text-decoration: none;

  outline: none;
  cursor: pointer;
  transition: border-radius 0.3s ease, background-color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    color: white;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
      color: #4869ab;
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.6);
    }
    width: 60%;
    height: 80px;
  }
`;

type PageNavProps = {
  onClick: () => void;
  open: boolean;
};

export default function PageNav({ onClick, open }: PageNavProps) {
  return (
    <NavWrapper $open={open}>
      <PageItems
        to="/homepage"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Home
      </PageItems>
      <PageItems
        to="/about"
        onClick={onClick}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Us
      </PageItems>
      <PageItems
        to="/services"
        onClick={onClick}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Services
      </PageItems>
    </NavWrapper>
  );
}
