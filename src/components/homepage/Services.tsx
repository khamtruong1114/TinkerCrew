import { ReactNode } from "react";

import Slider from "react-slick";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WebIcon from "@mui/icons-material/Web";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TabletMacIcon from "@mui/icons-material/TabletMac";

import DesignImage from "../../assets/design.svg";
import EcSolution from "../../assets/EcSolution.svg";
import Maintenacne from "../../assets/Maintenance.svg";
import MobileImage from "../../assets/MobileImage.svg";
import Web from "../../assets/Web.svg";
import styled from "styled-components";

interface CardType {
  image: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const cards: CardType[] = [
  {
    image: DesignImage,
    title: "UI/UX Design",
    description: "Develop a modern planning",
    icon: <GridViewIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    image: Web,
    title: "Web Development",
    description: "Develop a modern planning",
    icon: <WebIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    image: MobileImage,
    title: "Mobile App Development",
    description: "Develop a modern planning",
    icon: <TabletMacIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    image: EcSolution,
    title: "E-Commerce Solutions",
    description: "Develop a modern planning",
    icon: <EmojiObjectsIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    image: Maintenacne,
    title: "Maintainance",
    description: "Develop a modern planning",
    icon: <EngineeringIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

const StyledSlider = styled(Slider)`
  height: 95%;

  .slick-list {
    height: 100% !important;
  }

  .slick-track {
    height: 100%;
    display: flex;
  }

  .slick-slide {
    height: 100%;
    display: flex !important;
    align-items: stretch;
    justify-content: stretch;
    padding: 0 !important;
    margin: 0 !important;
    > div {
      width: 100%;
      height: 100%;
    }
  }

  //dots
  .slick-dots {
    bottom: 1015x;

    li {
      margin: 0 6px; // space

      button:before {
        font-size: 24px;
        color: #1976d2;
        opacity: 0.5;
      }

      &.slick-active button:before {
        opacity: 1;
        color: #7919d2;
      }
    }
  }
`;

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "40%",
        display: "block",
      }}
    >
      <StyledSlider {...settings}>
        {cards.map((card, i) => (
          <Card
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: 0,
              boxShadow: "none",
            }}
            key={i}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="50%"
                image={`${card.image}`}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h3" component="div">
                  {card.icon}
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}{" "}
      </StyledSlider>
    </Box>
  );
};

export default Services;
