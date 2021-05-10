import React from 'react'
import styled from 'styled-components'

const StHeader = styled.header`
 background-color: black;
 color: white;
 text-align:center;
 height: 100vh;
 display:flex;
 flex-direction: column;
 justify-content: center;
`
const StH1 = styled.h1`
 color: white;
`

const Header = ()=>{
    return (
    <StHeader id="welcome-section">
    
    <StH1>Hi, I'm Jonathan Cepeda</StH1>
    <p>A front End Student</p>
    
    </StHeader>
)
}
export default Header
