"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="home-section">

      <div className="home-container">
    
        <div className="home-text">

          <div className="home-title-container">
            <h1 className="home-greeting">Hello, I&apos;m</h1>
          </div>

          <h1 className="home-name">
            Minal Saleem
          </h1>

          <p className="home-description">I am deeply passionate about technology, with a focus on AI and web development. I love building websites using HTML, CSS, TypeScript, and JavaScript. Currently, I am learning Next.js to make my projects more interactive and engaging. Problem-solving excites me, and I enjoy crafting websites that are easy to use and visually appealing.</p>

  

          <div className="github-button-container">
            <Link href={"https://github.com/MinalSaleem"} target="_blank">
              <button
                className= "github-button"
                type="button"
              >
                Github Account
                <FaGithub size={28} className="ml-6" />
              </button>
            </Link>
          </div>
        </div>


        <div className="home-image-container">
          <Image
            src="/main.jpg"
            width={400}
            height={300}
            alt="picture"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;