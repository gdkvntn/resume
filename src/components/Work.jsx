import styled from "styled-components"
import Card from "./Card"



const WorkWrapper = styled.section`
    display: flex;
    justify-content: center;
    max-width: 800px;
    padding: 80px 0 80px 0;
    h2{
        text-transform: uppercase;
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
    margin-left: 60px;
`

const arr = [{
    title: 'HTML coder',
    date: '2021',
    inf: 'I was engaged in the development of sites layouted landings'
}
]

function Work ( props){
    return (
        <WorkWrapper>
            <h2>Experience</h2>
            <Cards>
                {arr.map((el,ind)=>{
                    
                    return <Card
                    key={ind}
                    el={el}/>
                })}
            </Cards>
        </WorkWrapper>
    )
}

export default Work