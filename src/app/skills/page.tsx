import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

export default function Skills() {
  return (
    <div className='skills-section'>

      <div className='skills-header'>
        <h2 className="skills-title">My Skills</h2>
      </div>
      
        <div className="skills-container">

          <div className='skill-card'>
            <div className="skill-icon">
            <FaHtml5 />
            </div>
            <h2 className='skill-name'>Html</h2>
          </div>

          <div className='skill-card'>
            <div className="skill-icon">
            <FaCss3Alt />
            </div>
            <h2 className='skill-name'>Css</h2>
          </div>

          <div className='skill-card'>
            <div className="skill-icon">
            <SiJavascript />
            </div>
            <h2 className='skill-name'>JavaScript</h2>
          </div>

          <div className='skill-card'>
            <div className="skill-icon">
            <BiLogoTypescript />
            </div>
            <h2 className='skill-name'>TypeScript</h2>
          </div>

          <div className='skill-card'>
            <div className="skill-icon">
                <RiNextjsFill /> 
            </div>
            <h2 className='skill-name'>Next.js</h2>
          </div>

          <div className='skill-card'>
            <div className="skill-icon">
            <FaFigma /> 
            </div>
            <h2 className='skill-name'>Figma</h2>
          </div>
   
        </div>
    
  </div>
  )
}

