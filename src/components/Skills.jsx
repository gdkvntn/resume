import styled from "styled-components";

const EducationWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 800px;
  padding: 40px;
  h2 {
    font-weight: bold;
    font-size: 1.5em;
  }
  h2::after {
    content: "";
    margin-top: 10px;
    display: block;
    height: 3px;
    background: #ffffff;
  }

  @media (max-width: 835px) {
    flex-direction: column;
    h2 {
      margin-bottom: 20px;
    }
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 200px;

  p {
    color: #ffffff;
    flex: 1 0 33.33%;
    margin: 5px 0;
  }
  @media (max-width: 835px) {
    margin-left: 0;
    p {
      text-align: center;
    }
  }
`;

function Skills(props) {
  return (
    <EducationWrapper>
      <h2>Skills</h2>
      <Cards>
        <p>HTML</p>
        <p>CSS</p>
        <p>SCSS</p>
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>React</p>
        <p>GitHub</p>
      </Cards>
    </EducationWrapper>
  );
}

export default Skills;
