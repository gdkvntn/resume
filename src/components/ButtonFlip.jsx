import styled from "styled-components";

const Button = styled.a`
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";

  &:hover {
    &::after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &::before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &::after {
    min-width: 200px;
    padding: 10px 0;
    border-radius: 30px;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #323237;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #c6c1c1;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }

  &::before {
    min-width: 200px;
    padding: 10px 0;
    border-radius: 30px;
    top: 0;
    left: 0;
    opacity: 1;
    color: #c6c1c1;
    display: block;
    line-height: 40px;
    transition: 0.5s;
    position: relative;
    background: var(--bg);
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
  }
`;

function ButtonFlip(props) {
  return (
    <>
      <Button
        href={props.href}
        target="_blank"
        classList="btn-flip"
        data-back={props.back}
        data-front={props.front}
      ></Button>
    </>
  );
}

export default ButtonFlip;
