import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div<{ $open: boolean; $show: boolean }>`
  display: flex;
  width: 700px;
  height: 47px;
  justify-content: space-between;
  gap: 3rem;
  margin-right: 3rem;
  //smaller screen
  @media (max-width: 1024px) {
    //open menubar
    display: ${(props) => (!props.$open || !props.$show ? "none" : "flex")};

    height: 100vh;
    width: 50%;
    margin-right: 0;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 3rem;
    gap: 3rem;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
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

export const PageItems = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;

  border: none;
  border-radius: 5px;
  width: 220px;
  height: 80px;

  font-weight: bold;
  font-size: 2rem;
  color: whitesmoke;
  text-decoration: none;

  outline: none;
  cursor: pointer;
  transition: border-radius 0.3s ease, background-color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.519);
    border-radius: 20px;
    color: white;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.339);
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.782);
      color: #4869ab;
      font-size: 1rem;
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.6);
    }
    width: 60%;
    height: 80px;
  }
`;

type PageNavProps = {
  onClick: () => void; //click to choose and then close menubar
  open: boolean; // open/close menubar
  show: boolean;
};

export default function PageNav({ onClick, open, show }: PageNavProps) {
  return (
    <NavWrapper $open={open} $show={show}>
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
        to="/contact"
        onClick={onClick}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact Us
      </PageItems>
    </NavWrapper>
  );
}
