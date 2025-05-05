import styled from "styled-components";
import MessageForm from "./MessageForm";

const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ContactForm() {
  return (
    <Wrapper>
      <MessageForm />
    </Wrapper>
  );
}
