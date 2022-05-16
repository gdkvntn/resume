import ParticlesBg from 'particles-bg'
import styled from 'styled-components';
const avatar ='./img/avatar.webp'
const screenHeight = window.innerHeight


const List = styled.ul`
    display: flex;
    justify-content: center;

    li{
        padding: 0;
        font-size: 16px;
        font-weight: 700;
        margin-right: 20px;
    }
   
    
`
const Name = styled.div`
display: flex;
height: 80%;
   img{
       margin-top: 40px;
       border: solid 4px ;
       max-width: 300px;
       height: 300px;
       border-radius: 50%;
   }
`

function Header() {
  return (
    <header style={{
        height:screenHeight,
        }}>
      <ParticlesBg color='#68237F' type='cobweb' bg={true}/>
      <nav style={{padding:'40px 0'}}>
          <List>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>RESUME</li>
              <li>WORKS</li>
              <li style={{marginRight:0}}>CONTACT</li>
          </List>
      </nav>
      <Name>
          <div style={{margin:'auto'}}>
          <p style={{marginBottom:'10px'}}>Hello, i'm</p>
          <h1 style={{marginBottom:'10px'}}>Anton</h1>
          <p>FRONT-END WEB DEVOLOPER</p>

          <img src={avatar} alt="avatar" />
          </div>
      </Name>

    </header>
  );
}

export default Header;
