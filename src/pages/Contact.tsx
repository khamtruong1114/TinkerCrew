import { Box, Typography } from "@mui/material";
import ContactForm from "../components/contact/ContactUsForm";
import styled from "styled-components";

const Wrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled(Box)`
  display: flex;
  align-items: center;
  height: 20%;
  width: 50%;
  padding-top: 4rem;

  @media (max-width: 600px) {
    padding-top: 6rem;
  }
`;

export default function Contact() {
  return (
    <Wrapper>
      <TextBox>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "24px",
              md: "32px",
            },
          }}
          gutterBottom
        >
          Feel free to talk to us if you have any problems, feedbacks or even
          just want to say hi to us. Your feedbacks will definitely be our
          motivation to improve the quality of services and grow faster.
        </Typography>
      </TextBox>
      <ContactForm />
    </Wrapper>
  );
}
