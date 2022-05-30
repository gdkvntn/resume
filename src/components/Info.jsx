import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work";
import styled from "styled-components";

const InfoWrapper = styled.section`
  padding: 60px 20px;
  width: 100%;
  background-image: url("./img/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: #c6c1c130;
  margin: 30px 0;
`;

export default function Info() {
  return (
    <InfoWrapper>
      <CardWrapper>
        <Education />
      </CardWrapper>
      <CardWrapper>
        <Work />
      </CardWrapper>
      <CardWrapper>
        <Skills />
      </CardWrapper>
    </InfoWrapper>
  );
}
