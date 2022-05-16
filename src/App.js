import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Education/>
      <Work/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
