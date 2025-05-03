import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const BounceButton = styled(IconButton)`
  position: absolute;
  top: 90%;
  left: 50%;
  outline: none;
  border: none;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 600px) {
    left: 45%;
  }
`;

export default function ScrollDownButton() {
  const handleClickCrollDownButton = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <BounceButton onClick={handleClickCrollDownButton}>
      <ExpandMoreIcon
        sx={{
          fontSize: {
            xs: "3rem",
            md: "6rem",
          },
        }}
      />
    </BounceButton>
  );
}
