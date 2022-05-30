import React from "react";
import styled from "styled-components";

const Ifrm = styled.iframe`
  width: 600px;
  height: 600px;
  @media (max-width: 700px) {
    width: 90vw;
    height: 100vw;
  }
`;

export default function Slider() {
  return (
    <>
      <Ifrm
        style={{ borderRadius: "20px", boxShadow: "0px 0px 20px 0px" }}
        src="https://cool-lily-b0b225.netlify.app"
        title="Vertical-slider"
      ></Ifrm>
    </>
  );
}
