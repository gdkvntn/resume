import styled from "styled-components";
import ButtonFlip from "./ButtonFlip";
import ButtonIndicator from "./ButtonInicator";
import SliderSite from "./SliderSite";

const AboutWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg);
  box-shadow: 0px 0px 100px 0px;
  z-index: 1;
`;

const Info = styled.div`
  max-width: 800px;
  h2 {
    margin-bottom: 40px;
    padding: 20px;
    border-bottom: 2px solid #ffffff;
    font-weight: bold;
  }
`;
const Buttons = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 475px) {
    flex-wrap: wrap;
    justify-content: center;
    a:last-child {
      margin-top: 60px;
    }
  }
`;
function About() {
  return (
    <AboutWrapper id="about">
      <Info>
        <h2>About Me</h2>
        <p>
          Use this bio section as your way of describing yourself and saying
          what you do, what technologies you like to use or feel most
          comfortable with, describing your personality, or whatever else you
          feel like throwing in.
        </p>
      </Info>
      <Buttons>
        <ButtonFlip
          href="https://github.com/gdkvntn"
          back={"gdkvntn"}
          front={"GitHub"}
        />
        <ButtonIndicator text={"Resume"} />
      </Buttons>
    </AboutWrapper>
  );
}

export default About;
