import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import CoverSection from "./CoverSection";
import Mission from "../../assets/Mission.png";

const MissionSection = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
`;

const MissionContentWrapper = styled(Box)`
  position: absolute;
  right: 0;
  top: 40%;
  width: 30%;
  height: 30%;

  @media (max-width: 600px) {
    width: 50%;
    left: 20px;
    top: 500px;
  }
`;

export default function MissionVisionSection() {
  return (
    <MissionSection>
      <CoverSection
        description="Mission & Vision"
        image={`${Mission}`}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            dolorem? Quaerat labore voluptatum rerum necessitatibus cupiditate
            perspiciatis, eius ad dolor facilis cumque quam, accusamus, quos
            architecto ipsum optio officiis veritatis?
          </Typography>
        </MissionContentWrapper>
      </CoverSection>
    </MissionSection>
  );
}
