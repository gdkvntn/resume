import styled from "styled-components";
import Card from "./Card";

const EducationWrapper = styled.section`
  display: flex;
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
  text-align: left;
  margin-left: 80px;
  @media (max-width: 835px) {
    margin-left: 0;
  }
`;

const arr = [
  {
    title: "THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL (JAVASCRIPT)",
    date: "2021",
    inf: "I learned more about html,css. Also learned basic javascript and did some projects",
  },
  {
    title: "Mogilev State Polytechnic College",
    date: "2015 - 2019",
    inf: "Secondary special education,Specialty : Technician-technologist, related profession : Turner",
  },
];

function Education(props) {
  return (
    <EducationWrapper id="info">
      <h2>EDUCATION</h2>
      <Cards>
        {arr.map((el, ind) => {
          return <Card key={ind} el={el} />;
        })}
      </Cards>
    </EducationWrapper>
  );
}

export default Education;
