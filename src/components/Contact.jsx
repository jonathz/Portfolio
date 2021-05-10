import React from 'react'
import styled from 'styled-components'
import main from '../styles/main.css'
const StSection = styled.section`
 background-color: #3f3f3f;
 color: white;
 text-align:center;
 display: flex;
 flex-direction: column;
 align-items:center;
`
const StDiv = styled.div`
 color: white;
 padding: 20px;
`


const Contact = ()=>{
    return (
    <StSection id="contact">
         <StDiv>
         Let's work together...
         </StDiv>
         <StDiv>
            <StDiv>
                <a href="https://github.com/jonathz/" target="_blank" id="profile-link">Github</a>
            </StDiv>
                
         </StDiv>
    </StSection>
)
}
export default Contact
