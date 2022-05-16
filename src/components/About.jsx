import styled from 'styled-components';
import ButtonFlip from './ButtonFlip';
import ButtonIndicator from './ButtonInicator';


const AboutWrapper = styled.section`
width: 100%;
padding: 100px 0;
display: flex;
flex-direction: column;
align-items: center;
color:#c6c1c1;

background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(179,14,200,0.465721322708771) 51%, rgba(27,2,27,1) 100%);
`

const Info = styled.div`
max-width: 800px;
h2{
    margin-bottom: 40px;
    padding: 20px;
    border-bottom: 2px solid ;
    font-weight: bold;
}
 
`
const Buttons = styled.div`
display: flex;
max-width: 800px;
width: 100%;
justify-content: space-between;
    margin-top:60px;

`
function About() {
    return (
      <AboutWrapper>
          <Info>
          <h2>About Me</h2>
          <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
          </Info>
          <Buttons>
          <ButtonFlip href='https://github.com/gdkvntn' back={'gdkvntn'} front={'GitHub'}/>
          <ButtonIndicator text={'Resume'}/>
          </Buttons>
      </AboutWrapper>
    );
  }
  
  export default About;