import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  z-index: 3;
  padding: 20px 0;
  width: 100%;
  transition: 1s;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;

  li {
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    margin-right: 20px;
    cursor: pointer;
  }
  li:hover {
    opacity: 0.7;
  }
`;

export default function NavBar() {
  const navbar = useRef(null);

  (function () {
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        navbar.current.style.background = "#383636e2";
      } else {
        navbar.current.style.background = "transparent";
      }
    };
  })();

  return (
    <Nav ref={navbar}>
      <List>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="info"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Info
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Project
          </Link>
        </li>
        <li style={{ margin: "0" }}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </List>
    </Nav>
  );
}
