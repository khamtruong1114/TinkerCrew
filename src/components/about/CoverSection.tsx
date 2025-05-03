import styled from "styled-components";

import { Typography, Box } from "@mui/material";
import { ReactNode } from "react";

const StyledCoverSection = styled.div<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

const ContentBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
`;

type CoverSectionProps = {
  children: ReactNode;
  description: string;
  image: string;
  id: string;
};

export default function CoverSection({
  children,
  image,
  description,
  id,
}: CoverSectionProps) {
  //welcome section

  return (
    <StyledCoverSection $image={image} id={id}>
      <ContentBox>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: "32px",
              sm: "48px",
              md: "72px",
            },
          }}
          data-aos="fade-up"
        >
          {description}
        </Typography>
      </ContentBox>
      {children}
    </StyledCoverSection>
  );
}
