import styled from "styled-components";
import NavBar from "./NavBar";

const avatar = "./img/ava.jpg";

const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: url("./img/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Name = styled.div`
  margin-top: 64px;
  display: flex;
  height: 80%;
  img {
    margin-top: 40px;
    border: solid 4px #ffffff;
    border-radius: 50%;
    height: 300px;
    width: 300px;
  }
`;

function Header() {
  return (
    <Container id="home">
      <NavBar />
      <Name>
        <div style={{ margin: "auto" }}>
          <p style={{ marginBottom: "10px" }}>Hello, i'm</p>
          <h1 style={{ marginBottom: "10px", color: "#ffffff" }}>
            Anton Hudkou
          </h1>
          <p>FRONT-END WEB DEVOLOPER</p>

          <img src={avatar} height="300" width="300" alt="avatar" />
        </div>
      </Name>
    </Container>
  );
}

export default Header;
