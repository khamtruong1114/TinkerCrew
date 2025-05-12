import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import styled from "styled-components";
import HeroSectionImage2 from "../../assets/HeroSectionImage2.png";
import HeroSectionImage3 from "../../assets/HeroSectionImage3.png";
import Portfolio from "./Portfolio";
const HeroSectionWrapper = styled(Box)`
  display: flex;
  height: 60%;

  @media (max-width: 900px) {
    height: 70%;
    flex-direction: column;
  }
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

  @media (max-width: 900px) {
    width: 100%;
    padding-top: 0;
  }
`;

const TextBox = styled(Box)`
  width: 75%;
  padding-top: 8rem;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* text */}
      <TextContainer $image={`${HeroSectionImage2}`}>
        <TextBox>
          <Typography
            sx={{
              fontSize: {
                xs: "1.25rem",
                sm: "1.25rem",
                md: "4.5rem",
              },
            }}
            color="#8d96ff"
            gutterBottom
          >
            Build Mordern Website That Deliver Results
          </Typography>

          <Typography
            variant="body2"
            color="#f3f3f6"
            sx={{
              fontWeight: "300",
              fontSize: {
                xs: "14px",
                sm: "20px",
              },
            }}
            gutterBottom
          >
            We craft custom websites, web apps, and digital solutions. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Animi odit, nemo
            in, quo labore veniam sapiente aliquid dignissimos quasi dolor
            deleniti eum praesentium nulla impedit quis similique, dolorem
            excepturi vero.
          </Typography>
        </TextBox>

        <ButtonGroup
          variant="text"
          size="large"
          sx={{
            fontWeight: "300",
          }}
        >
          <Button
            sx={{
              color: "#46c4fe",
              fontSize: {
                xs: "14px",
                sm: "24px",
                md: 32,
              },
            }}
          >
            Learn More
          </Button>
          <Button
            href="/contact"
            sx={{
              color: "#46c4fe",

              "&:hover": {
                color: "#46c4fe",
              },
              fontSize: {
                xs: "14px",
                sm: "24px",
                md: 32,
              },
            }}
          >
            Contact Us
          </Button>
        </ButtonGroup>
      </TextContainer>

      {/* Portfolio*/}
      <TextContainer
        $image={`${HeroSectionImage3}`}
        sx={{
          "@media (max-width: 600px)": {
            paddingTop: 0,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Portfolio />
      </TextContainer>
    </HeroSectionWrapper>
  );
}
