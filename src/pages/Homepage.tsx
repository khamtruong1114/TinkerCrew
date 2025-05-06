import { Box } from "@mui/material";
import styled from "styled-components";
import HeroSection from "../components/homepage/HeroSetion";
import Services from "../components/homepage/Services";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default function Homepage() {
  return (
    <Wrapper>
      <Box sx={{ height: "100%" }}>
        {/* hero section */}
        <HeroSection />

        {/* Services */}
        <Services />
      </Box>
      {/* Porfolio here */}
    </Wrapper>
  );
}
