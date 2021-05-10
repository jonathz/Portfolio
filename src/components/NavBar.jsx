import React from 'react'
import styled from 'styled-components'
import main from '../styles/main.css'

const StNav = styled.nav`
 background-color: black;
 color: white;
 text-align:center;
 display:flex;
 justify-content: flex-end;
 position: sticky;
 top: 0
`
const StDiv = styled.div`
 color: white;
 padding: 20px;
`

const navBar = ()=>{
    return ( 
        <StNav id="navbar">
            <StDiv>
            <a href="#welcome-section" >About</a>
            </StDiv>
            <StDiv>
            <a href="#projects" >Work</a>
            </StDiv>
            <StDiv>
            <a href="#contact" >Contact</a>
            </StDiv>

        </StNav>
            
    
)
}
export default navBar
