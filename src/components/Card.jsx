import styled from "styled-components";

const Title = styled.h3`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Inf = styled.p`
  margin-bottom: 20px;
  color: #ffffff;
`;

function Card(props) {
  return (
    <div>
      <Title>{props.el.title}</Title>
      <Date>{props.el.date}</Date>
      <Inf>{props.el.inf}</Inf>
    </div>
  );
}

export default Card;
