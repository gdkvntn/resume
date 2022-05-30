import React from "react";
import styled from "styled-components";

const Ifrm = styled.iframe`
  width: 600px;
  height: 600px;
  @media (max-width: 700px) {
    width: 90vw;
    height: 600px;
  }
`;

export default function WhackAMole() {
  return (
    <div>
      <Ifrm
        style={{ borderRadius: "20px", boxShadow: "0px 0px 20px 0px" }}
        src="https://statuesque-meerkat-5f17a3.netlify.app"
        title="whakeAMole"
      ></Ifrm>
    </div>
  );
}
