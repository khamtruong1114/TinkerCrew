import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import initAOS from "../utils/Aos.ts";

export default function AppLayout() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastCrollY] = useState(0);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    initAOS();
  }, []);

  useEffect(() => {
    function handleScrollY() {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      }
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      }
      setLastCrollY(window.scrollY);
      setMenuToggle(false);
    }
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [lastScrollY]);

  return (
    <>
      <Header
        show={showHeader}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
