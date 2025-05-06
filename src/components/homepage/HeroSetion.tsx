import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import styled from "styled-components";
import HeroSectionImage1 from "../../assets/HeroSectionImage1.png";
import HeroSectionImage2 from "../../assets/HeroSectionImage2.png";
import HeroSectionImage3 from "../../assets/HeroSectionImage3.png";

const HeroSectionWrapper = styled(Box)`
  display: flex;
  height: 60%;
`;

const TextContainer = styled(Box)<{ $image: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
`;

const TextBox = styled(Box)`
  width: 50%;
`;

const Image = styled(Box)`
  width: 50%;
  height: 60%;
`;

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* text */}
      <TextContainer $image={`${HeroSectionImage2}`}>
        <TextBox>
          <Typography variant="h1" color="#8d96ff" gutterBottom>
            Build Mordern Website That Deliver Results
          </Typography>

          <Typography
            variant="h3"
            color="#f3f3f6"
            sx={{
              fontWeight: "300",
            }}
            gutterBottom
          >
            We craft custom websites, web apps, and digital solutions.
          </Typography>
        </TextBox>

        <ButtonGroup variant="text" size="large">
          <Button sx={{ color: "#46c4fe" }}>Learn More</Button>
          <Button
            href="/contact"
            sx={{
              color: "#46c4fe",

              "&:hover": {
                color: "#46c4fe",
              },
            }}
          >
            Contact Us
          </Button>
        </ButtonGroup>
      </TextContainer>
      {/* Portfolio*/}
      <TextContainer $image={`${HeroSectionImage3}`}>
        <Image>
          <img
            src={`${HeroSectionImage1}`}
            alt="image of hero section"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Image>
      </TextContainer>
    </HeroSectionWrapper>
  );
}
