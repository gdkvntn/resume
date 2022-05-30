import styled from "styled-components";
import Card from "./Card";

const WorkWrapper = styled.section`
  display: flex;
  justify-content: center;
  max-width: 800px;
  padding: 40px;
  h2 {
    text-transform: uppercase;
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
  margin-left: 60px;
  @media (max-width: 835px) {
    margin-left: 0;
  }
`;

const arr = [
  {
    title: "HTML coder",
    date: "2021",
    inf: "I was engaged in the development of sites layouted landings",
  },
];

function Work(props) {
  return (
    <WorkWrapper>
      <h2>Experience</h2>
      <Cards>
        {arr.map((el, ind) => {
          return <Card key={ind} el={el} />;
        })}
      </Cards>
    </WorkWrapper>
  );
}

export default Work;
