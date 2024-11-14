"use client";
import React from 'react'
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className='header-container'>

        <div className='header-title'>
            <h2 className='title'>Minal</h2>
        </div>
       
        <div className={`nav-links ${isOpen ? 'nav-open' : 'nav-closed'} `}>
            <Link href={'./'} className='nav-link'>Home</Link>
            <Link href={'./about'} className='nav-link'>About</Link>
            <Link href={'./project'} className='nav-link'>Project</Link>
            <Link href={'./skills'} className='nav-link'>Skills</Link>
            <Link href={'./contact'}className='nav-link' >Contact</Link>
        </div>
        
        <div className='icon'>
            <button onClick={toggleMenu}>
                <IoMenu size={28}
                />
            </button>
        </div>
    </div>
  )
}
