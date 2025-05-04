import styled from "styled-components";
import Welcome from "../assets/Welcome.png";
import ScrollDownButton from "../ui/ScrollDown";
import CoverSection from "../components/about/CoverSection";
import StorySection from "../components/about/StorySection";
import MissionVisionSection from "../components/about/MissionSection";

const AboutWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
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
      <MissionVisionSection />
    </AboutWrapper>
  );
}
