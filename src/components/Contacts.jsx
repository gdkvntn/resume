import React from "react";
import styled from "styled-components";
const telegram = "./img/svg/telegram.svg";
const linked = "./img/svg/linkedin.svg";
const email = "./img/svg/email.svg";

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url("./img/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Title = styled.h3`
  flex: 1 0 100%;
  margin: 60px 0;
`;

const Link = styled.a`
  flex: 1 0 33.33%;
  margin-bottom: 60px;

  img {
    width: 100%;
    max-width: 80px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #c6c1c130;
    transition: all 0.4s;
    cursor: pointer;
  }
  img:hover {
    opacity: 0.7;
    transform: translateY(-12px);
    box-shadow: 12px 12px 2px 1px black;
  }
`;

export default function Contacts() {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contacts</Title>
        <Link href="https://t.me/gdkvntn" target="_blank">
          <img src={telegram} alt="telegram" width="80" height="80" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/anton-hudkou-365837239/"
          target="_blank"
        >
          <img src={linked} alt="linkedin" width="80" height="80" />
        </Link>
        <Link href="mailto: antonhudkou@gmail.com" target="_blank">
          <img src={email} alt="email" width="80" height="80" />
        </Link>
      </Wrapper>
    </Container>
  );
}
