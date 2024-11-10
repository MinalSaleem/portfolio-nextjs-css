import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='about-container'>

        <div className="about-text">
            <h1 className="about-title">About Me </h1>
          
                <p className='about-paragraph'>My journey in IT began in 20 since then, I have had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
                <p className=' about-paragraph'> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
            </div>

            <div className="profile-image-container">
                <Image 
                        src="/main.jpg"
                        alt="Profile Pic" 
                        width={300} 
                        height={300} 
                        className="profile-image"   
                    />
            </div>
    </div>
  )
}
