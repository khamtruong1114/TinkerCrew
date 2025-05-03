import { Box, Typography } from "@mui/material";
import styled from "styled-components";

type IntroCardProps = {
  icon: string;
  title: string;
  description: string;
};

const StyledCard = styled(Box)<{ $icon: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.$icon});
  background-position: center;
  background-size: cover;
  box-shadow: 0 10px 30px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  height: 70%;
  text-align: center;

  transition: all 0.3s ease;
`;

const StyledTitle = styled(Typography)`
  color: #8a76e1;
  font-weight: 300px;
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
            xs: "32px",
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
            xs: "0.5rem",
            sm: "0.8rem",
            md: "1.2rem",
          },
        }}
      >
        {description}
      </StyledDescription>
    </StyledCard>
  );
}
