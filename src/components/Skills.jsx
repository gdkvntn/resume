import styled from "styled-components"


const EducationWrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: left;
    max-width: 800px;
    padding-bottom: 80px;
    h2{
        font-weight: bold;
        font-size: 1.5em;
    }
    h2::after{
      content: '';
      margin-top: 10px;
      display: block;
      height: 3px;
      background: #68237F;
    }
`
const Cards = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
    text-align: left;
    margin-left: 200px;
`


function Skills ( props){
    return (
        <EducationWrapper>
            <h2>Skills</h2>
            <Cards>
               <p>HTML</p>
               <p>CSS</p>
               <p>SCSS</p>
               <p>JavaScript</p>
               <p>TypeScript</p>
               <p>React</p>
               <p>GitHub</p>
            </Cards>
        </EducationWrapper>
    )
}

export default Skills