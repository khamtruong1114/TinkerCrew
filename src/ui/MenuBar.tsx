import styled from "styled-components";

const MenuBarStyle = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10;
  display: inline;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 0.5rem;
    right: 1rem;
  }
`;

const Bar1 = styled.div<{ $open: boolean }>`
  width: 2.5rem;
  height: 0.32rem;
  background-color: #fff;
  margin: 8px 0;
  transition: 0.4s;
  transform: ${(props) =>
    props.$open ? "rotate(-45deg) translate(-10px, 8px)" : "none"};
`;
const Bar2 = styled.div<{ $open: boolean }>`
  width: 2.5rem;
  height: 0.32rem;
  background-color: #fff;
  margin: 8px 0;
  transition: 0.4s;
  opacity: ${(props) => (props.$open ? "0" : "none")};
`;
const Bar3 = styled.div<{ $open: boolean }>`
  width: 2.5rem;
  height: 0.32rem;
  background-color: #fff;
  margin: 8px 0;
  transition: 0.4s;
  transform: ${(props) =>
    props.$open ? "rotate(45deg) translate(-10px, -8px)" : "none"};
`;

interface MenuBarProps {
  open: boolean;
}

function MenuBar({ open }: MenuBarProps) {
  return (
    <MenuBarStyle>
      <Bar1 $open={open}></Bar1>
      <Bar2 $open={open}></Bar2>
      <Bar3 $open={open}></Bar3>
    </MenuBarStyle>
  );
}

export default MenuBar;
