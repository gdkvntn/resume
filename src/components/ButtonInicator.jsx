import styled from "styled-components"

const Button = styled.button`

  min-width: 200px;
  min-height: 60px;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #c6c1c1;
 
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(179,14,200,0.465721322708771) 51%, rgba(27,2,27,1) 100%);
  border: none;
  border-radius: 500px;
  box-shadow: 12px 12px 24px rgba(179,14,200,0.465721322708771) ;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  

&::before {
content: '';
  border-radius: 1000px;
  min-width: calc(200px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid rgba(179,14,200,0.465721322708771);
  box-shadow: 0 0 60px #c800ffa3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

&:hover, &:focus {
  color: #313133;
  transform: translateY(-6px);
}

&:hover::before, &:focus::before {
  opacity: 1;
}

&::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid rgba(179,14,200,0.465721322708771);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

&:hover::after, &:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}
`

function ButtonIndicator(props){
return <>
<Button>{props.text}</Button>
</>
}

export default ButtonIndicator