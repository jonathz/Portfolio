import React from 'react'
import styled from 'styled-components'
import main from '../styles/main.css'

const StSection = styled.section`
 background-color: #3f3f3f;
 color: white;
 text-align:center;
 display: flex;
 flex-direction: column;
 text-decoration:none;
 align-items:center;
`
const StH2 = styled.h2`
 color: white;
`
const StImg = styled.img`
    width:400px;
    height:380px;
`
const StprojectName = styled.div`
    background-color: black;
    padding: 20px;
    color: white;
    overflow: hidden;
`
const Projects = ()=>{
    return (
    <StSection id="projects">
    
    <StH2>These are some of my projects</StH2>
    <a className="project-tile" href="https://jonathz.github.io/SPA-VanillaJS-AdoptionPage/" target="_blank">
        <StImg src="https://imagizer.imageshack.com/v2/535x450q90/r/922/JcgQfD.jpg" id="imgProject"/>
        <StprojectName id="projectName">SPA Pet Adoption Page</StprojectName>
    </a>

    </StSection>
)
}
export default Projects
