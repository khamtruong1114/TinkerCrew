import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    duration: 1000, // Thời gian animation
    easing: "ease-in-out", // Loại easing
    delay: 0,
  });
};

export default initAOS;
