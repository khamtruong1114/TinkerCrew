import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "styled-components";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

import Popcorn from "../../assets/Popcorn.png";
import Worldwise from "../../assets/Worldwise.png";
import JokeTeller from "../../assets/JokeTeller.png";
import NasaApi from "../../assets/NasaApi.png";

const Wrapper = styled(Box)`
  height: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PortfolioWrapper = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 70%;
  position: absolute;
  bottom: 0;
`;

const StyledCard = styled(Card)`
  position: relative;
  width: 50%;
  height: 50%;
  transition: transform 0.5s;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 0%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  &:hover {
    transform: scale(1.1);
    color: #fff;
    box-shadow: 0px -5px 15px 10px rgba(255, 255, 255, 0.2);
    z-index: 1;
    &::before {
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
  &:hover img {
    object-fit: cover;
  }
`;

const products = [
  {
    type: "web",
    image: Popcorn,
    title: "Popcorn",
    description:
      "JS, React, TS  We craft custom websites, web apps, and digital solutions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit, nemo in, quo labore veniam sapiente aliquid dignissimos",
  },
  {
    type: "mobile",
    image: JokeTeller,
    title: "Robot",
    description:
      "JS, React, TS  We craft custom websites, web apps, and digital solutions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit, nemo in, quo labore veniam sapiente aliquid dignissimos",
  },
  {
    type: "web",
    image: Worldwise,
    title: "Worldwise",
    description:
      "JS, React, TS  We craft custom websites, web apps, and digital solutions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit, nemo in, quo labore veniam sapiente aliquid dignissimos",
  },
  {
    type: "mobile",
    image: NasaApi,
    title: "NASA API",
    description:
      "JS, React, TS  We craft custom websites, web apps, and digital solutions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit, nemo in, quo labore veniam sapiente aliquid dignissimos ",
  },
];

export default function Portfolio() {
  const [type, setType] = useState("all");

  const filteredProducts =
    type === "all"
      ? products
      : products.filter((product) => product.type === type);

  function handleFilter(type: string) {
    setType(type);
  }

  return (
    <Wrapper>
      <ButtonGroup
        variant="text"
        size="small"
        sx={{
          width: "100%",
          position: "absolute",
          top: "15%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => handleFilter("all")}
          sx={{
            color: "#46fee9",
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: 16,
            },
          }}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilter("web")}
          sx={{
            color: "#befe46",

            fontSize: {
              xs: "14px",
              sm: "16px",
              md: 16,
            },
          }}
        >
          Web
        </Button>
        <Button
          onClick={() => handleFilter("mobile")}
          sx={{
            color: "#6e46e6",
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: 16,
            },
          }}
        >
          Mobile
        </Button>
      </ButtonGroup>
      <PortfolioWrapper>
        {filteredProducts.map((product, index) => (
          <StyledCard key={index}>
            <CardActionArea>
              <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
              />
              <CardContent sx={{ bgcolor: "lightBlue" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", bgcolor: "lightBlue" }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        ))}
      </PortfolioWrapper>
    </Wrapper>
  );
}
