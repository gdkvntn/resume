import styled from "styled-components"
import Card from "./Card"

const EducationWrapper = styled.section`
    display: flex;
    justify-content: center;
    max-width: 800px;
    padding: 80px 0 0 0;
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
    text-align: left;
    margin-left: 80px;
`

const arr = [{
    title: 'THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL (JAVASCRIPT)',
    date: '2021',
    inf: 'inf'
},
{
    title: 'Mogilev State Polytechnic College',
    date: '2015 - 2019',
    inf: 'Secondary special education, Specialty : Technician-technologist, related profession : Turner'
}]

function Education ( props){
    return (
        <EducationWrapper>
            <h2>EDUCATION</h2>
            <Cards>
                {arr.map((el,ind)=>{
                    
                    return <Card
                    key={ind}
                    el={el}/>
                })}
            </Cards>
        </EducationWrapper>
    )
}

export default Education