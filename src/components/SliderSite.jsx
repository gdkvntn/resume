import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Zoom } from "swiper";
import "swiper/css/bundle";

const SliderWrapper = styled.div`
  :hover .text {
    transform: translateY(-100px);
    opacity: 1;
  }
  li {
    border-radius: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: 0.5s ease-in;
    cursor: pointer;
  }
  :hover img {
    transform: scale(1.1);
  }
  div {
    color: #c6c1c1;
  }
  span {
    background-color: #c6c1c1;
  }
  .swiper {
    max-width: 800px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0 0 20px 0;
  }

  @media (max-width: 835px) {
    .swiper {
      max-width: 90vw;
      height: auto;
    }
    img {
      transform: scale(1.1);
    }
    :hover img {
      transform: scale(1.15);
    }
  }
`;
// const Text = styled.div`
//   opacity: 0;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   transition: 0.5s ease-in;
//   z-index: 2;
//   max-width: 800px;
//   width: 100%;
//   border: 1px solid;
//   border-radius: 20px;
//   background-color: #c6c1c130;
//   padding: 20px;
//   p {
//     font-size: 2rem;
//     margin: 0;
//     border-bottom: 1px solid;
//   }
//   li {
//     list-style-type: circle;
//   }
// `;

SwiperCore.use([Navigation, Pagination, Autoplay, Zoom]);

const SLI = [
  {
    href: "https://hilarious-ganache-c4ff3b.netlify.app/",
    img: "./img/site1.webp",
    title: "My one of the first sites",
  },
  {
    href: "https://chipper-meerkat-624167.netlify.app",
    img: "./img/site2.webp",
    title: "My one of the first sites",
  },
  {
    href: "https://hotburgerbel.netlify.app",
    img: "./img/site3.webp",
    title: "My one of the first sites",
  },
];

export default function SliderSite() {
  const SLIDE = [];
  for (let i = 0; i < SLI.length; i++) {
    SLIDE.push(
      <SwiperSlide key={`slide${i}`} tag="li">
        <a href={SLI[i].href} target="_blank" rel="noreferrer">
          <img src={`./img/site${i + 1}.webp`} alt={`slide ${i + 1}`} />
        </a>
      </SwiperSlide>
    );
  }

  return (
    <SliderWrapper>
      <Swiper
        wrapperTag="ul"
        style={{}}
        navigation
        pagination
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {SLIDE}
      </Swiper>
    </SliderWrapper>
  );
}
