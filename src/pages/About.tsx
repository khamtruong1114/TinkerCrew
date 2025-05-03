import styled from "styled-components";
import Welcome from "../assets/Welcome.png";
import { Box, Typography } from "@mui/material";
import ScrollDownButton from "../ui/ScrollDown";

import CoverSection from "../components/about/CoverSection";
import StorySection from "../components/about/StorySection";

const AboutWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

// for story section

// Mission section
const MissionSection = styled(Box)`
  display: flex;
  margin-top: 6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
`;

const MissionContentWrapper = styled(Box)`
  margin-left: 112rem;
  margin-top: 37rem;
  width: 30%;
  height: 30%;

  @media (max-width: 900px) {
    margin-left: 0.5rem;
    margin-top: 35rem;
    width: 50%;
  }
`;

export default function About() {
  return (
    <AboutWrapper>
      {/* welcome section */}
      <CoverSection
        description="Welcome to Tinker Crew"
        image={`${Welcome}`}
        id="welcome"
      >
        <ScrollDownButton />
      </CoverSection>

      {/* Story section */}
      <StorySection />

      {/* Mission and vision */}
      <MissionSection>
        <CoverSection
          description="Mission & Vision"
          image={`${Welcome}`}
          id="mission"
        >
          <MissionContentWrapper>
            <Typography
              variant="h4"
              color="white"
              data-aos="fade-up"
              sx={{
                fontWeight: "300",
                fontSize: {
                  xs: "16px",

                  md: "32px",
                },
              }}
              gutterBottom
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, dolorem? Quaerat labore voluptatum rerum necessitatibus
              cupiditate perspiciatis, eius ad dolor facilis cumque quam,
              accusamus, quos architecto ipsum optio officiis veritatis?
            </Typography>
          </MissionContentWrapper>
        </CoverSection>
      </MissionSection>
    </AboutWrapper>
  );
}
