
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts'
import Info from './components/Info';
import styled ,{ createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root{
  --bg: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

html{
  box-sizing: border-box;
}
*{
  box-sizing: inherit;
}

body{
  padding: 0;
  margin: 0;
  font-family: 'opensans-regular', sans-serif;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color:#c6c1c1;
}
h1,h2,h3,h4,h5,h6{
  font-size: 1.5em;
  
}



`


const AppWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`


function App() {
  return (
    <AppWrapper>
      <GlobalStyle/>
      <Header/> 
      <About />
      <Info/>
      <Projects/>
      <Contacts/>
      
    </AppWrapper>
  );
}

export default App;
