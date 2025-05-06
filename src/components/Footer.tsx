import { Box, Icon, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";
import Logo from "../ui/Logo";
import { PageItems } from "./PageNav";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  padding: 2rem 1rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  margin-left: 1rem;
  width: 100%;
`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;
  flex: 1;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

const Items = styled(Box)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
`;

const StyledPageItems = styled(PageItems)`
  @media (max-width: 900px) {
    font-size: 24px;
    height: 100%;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        {/* logo + adress */}
        <StyledContainer>
          <Logo />
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "14px",
                md: "24px",
              },
            }}
          >
            F37/71, Hamlet 6,
            <br /> Hung Long Commune, Binh Chanh District,
            <br /> Ho Chi Minh City, Vietnam
          </Typography>
        </StyledContainer>
        {/* Links */}
        <StyledContainer>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "14px",
                md: "32px",
              },
            }}
          >
            <NavLink
              to="/about"
              style={{ color: "#220dbe", textDecoration: "none" }}
            >
              About Us
            </NavLink>
          </Typography>

          <a href="#story">
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  md: "24px",
                },
              }}
            >
              Our Story
            </Typography>
          </a>

          <a href="#mission">
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  md: "24px",
                },
              }}
            >
              Mission
            </Typography>
          </a>
        </StyledContainer>
        {/* Contact info */}
        <StyledContainer>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "14px",
                md: "32px",
              },
            }}
          >
            <NavLink
              to="/contact"
              style={{ color: "#220dbe", textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </Typography>
          <Items sx={{ fontSize: "large" }}>
            <Icon>
              <EmailIcon />
            </Icon>
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  md: "24px",
                },
              }}
            >
              Email: TinkerCrew@mail.com
            </Typography>
          </Items>

          <Items>
            <Icon>
              <PhoneIcon />
            </Icon>
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  md: "24px",
                },
              }}
            >
              Tel: (+084)-134567890
            </Typography>
          </Items>
        </StyledContainer>
        {/* button lets talk */}
        <StyledContainer>
          <StyledPageItems to="/contact">Let's talk</StyledPageItems>
        </StyledContainer>
      </ContentWrapper>
    </Wrapper>
  );
}
