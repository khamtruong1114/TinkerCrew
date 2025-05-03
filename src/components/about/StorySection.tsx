import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import IntroCard from "./IntroCard";
import Welcome from "../../assets/Welcome.png";

const cards = [
  {
    icon: `${Welcome}`,
    title: "Who we are?",
    description: "Write somthing here",
  },
  {
    icon: `${Welcome}`,
    title: "Why do we exist?",
    description: "Write somthing here",
  },
  {
    icon: `${Welcome}`,
    title: "Whom do we serve?",
    description: "Write somthing here",
  },
];
const StoryWrapper = styled.div`
  position: relative;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled(Container)`
  padding: 6rem 0;
  position: absolute;
  left: 6rem;
  min-width: 90%;
  height: 100%;

  @media (max-width: 900px) {
    left: 0;
    padding: 0;
  }
`;

const StoryBox = styled(Box)`
  margin-left: 30px;
  margin-bottom: 10px;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 50%;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
`;

const Image = styled.img`
  border-radius: 40px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default function StorySection() {
  return (
    <StoryWrapper id="story">
      <Wrapper>
        <StoryBox>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: {
                xs: "48px",

                md: "72px",
              },
            }}
            gutterBottom
          >
            Our Story
          </Typography>
        </StoryBox>
        {/* Story and image */}
        <ContentWrapper>
          <Image src={Welcome} alt="Our story" />
          <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam
            veniam iure ipsam debitis velit obcaecati excepturi iusto, molestiae
            libero. Fugit consequuntur neque, distinctio dicta ullam optio
            repudiandae omnis odit.
          </Typography>
        </ContentWrapper>
        {/* Cards */}
        <ContentWrapper>
          {cards.map((card, index) => (
            <IntroCard
              icon={`${card.icon}`}
              title={card.title}
              description={card.description}
              key={index}
            />
          ))}
        </ContentWrapper>
      </Wrapper>
    </StoryWrapper>
  );
}
