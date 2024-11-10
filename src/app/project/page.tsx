import React from 'react'
import Image from 'next/image'

export default function Project() {
  return (
    <div className='projects-section'>

      <div className='projects-header'>
        <h2 className="projects-title">My Projects</h2>
      </div>

      <div className="projects-container">
        <div className='projects-list'>

          <div className='project-item'> 
            <Image src="/download.png" alt='html,css&tsproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/Hackathon" target="_blank" rel="noopener noreferrer">
            <p className= "project-link">Html,Css,Ts</p>
            </a>
          </div>

          <div className='project-item'>
            <Image src="/tss.jpg" alt='typescriptproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/Typescript-45-Exercise" target="_blank" rel="noopener noreferrer">
            <p className= "project-link">Typescript</p>
            </a>
          </div>

          <div className='project-item'>
            <Image src="/nextjss.jpeg" alt='nextjsproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/nextjs-class-assignment" target="_blank" rel="noopener noreferrer">
            <p className= "project-link">Nextjs</p>
            </a>
          </div>

        </div>

      </div>

    </div>
  
  )
}

