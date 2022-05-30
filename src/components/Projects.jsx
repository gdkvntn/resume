import Calculator from "./calculator/calculator";
import Slider from "./slider/Slider";
import WhackAMole from "./whackAMole/WhackAMole";
import styled from "styled-components";
import SliderSite from "./SliderSite";

const Container = styled.div`
  width: 100%;
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg);
  box-shadow: 0px 0px 100px 0px;
  z-index: 1;
  h2 {
    margin-bottom: 40px;
    padding: 20px;
    border-bottom: 2px solid #ffffff;
    font-weight: bold;
    width: 100%;
    max-width: 800px;
  }
`;
const Wrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 20px 0;
    white-space: pre-line;
  }
`;

function Projects() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div>
        <Wrapper>
          <p>My first and only calculator, please do not criticize strongly.</p>
          <Calculator />
        </Wrapper>
        <Wrapper>
          <p>This slider is made with love.</p>
          <Slider />
        </Wrapper>
        <Wrapper>
          <p>
            Whak a mole is a minigame that you can play with a relaxed mood.
            <br />
            P.S. No mole is hurt.
          </p>
          <WhackAMole />
        </Wrapper>
        <Wrapper>
          <p>Several sites and applications.</p>
          <SliderSite />
        </Wrapper>
      </div>
    </Container>
  );
}

export default Projects;
