import { Box, Typography } from "@mui/material";
import styled from "styled-components";

type IntroCardProps = {
  icon: string;
  title: string;
  description: string;
};

const StyledCard = styled(Box)<{ $icon: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.$icon});
  background-position: center;
  background-size: cover;
  box-shadow: 0 10px 30px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    height: 40%;
    width: 70%;
  }
`;

const StyledTitle = styled(Typography)`
  color: #a292e9;
  font-weight: 200px;
`;

const StyledDescription = styled(Typography)`
  color: #ffff;
  text-align: left;
`;

export default function IntroCard({
  icon,
  title,
  description,
}: IntroCardProps) {
  return (
    <StyledCard $icon={icon}>
      {/* <img src={icon} alt={title} /> */}
      <StyledTitle
        sx={{
          fontSize: {
            xs: "24px",
            sm: "32px",
            md: "48px",
          },
        }}
      >
        {title}
      </StyledTitle>
      <StyledDescription
        sx={{
          fontSize: {
            xs: "14px",
            sm: "20px",
            md: "24px",
          },
        }}
      >
        {description}
      </StyledDescription>
    </StyledCard>
  );
}
