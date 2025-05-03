import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import IntroCard from "./IntroCard";
import StoryImage from "../../assets/StoryImage.png";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";

const cards = [
  {
    icon: `${Card1}`,
    title: "Who we are?",
    description: "Write somthing here",
  },
  {
    icon: `${Card2}`,
    title: "Why do we exist?",
    description: "Write somthing here",
  },
  {
    icon: `${Card3}`,
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

const HeaderBox = styled(Box)`
  margin-left: 1rem;
  margin-bottom: 1.25rem;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
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
  height: 80%;
  width: 70%;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export default function StorySection() {
  return (
    <StoryWrapper id="story">
      <Wrapper>
        <HeaderBox>
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
        </HeaderBox>
        {/* Story and image */}
        <ContentWrapper>
          <Image src={StoryImage} alt="Our story" />
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
