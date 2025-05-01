import styled from "styled-components";
import AppLayout from "../pages/AppLayout";

const MenuOverlayStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transform: translateX(-100vw);
`;


export default function MenuOverlay() {
  return (
    <MenuOverlayStyle>
      <AppLayout />
    </MenuOverlayStyle>
  );
}
