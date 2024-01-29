'use client';

import React from "react";


export default function About() {
  return (
    <div className="container mx-auto px-8">
      <a id="aboutme"></a>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-4xl text-center p-5">
          About Me
        </h1>
      </div>
      <div className="gap-4 lg:columns-2 sm:columns-1 content-center display-inline">
        <div className="flex justify-center pb-6">
          <img 
            src="images/IMG_20230615_191019_01.jpg"
            width="75%"
            />
        </div>
        <div className="content-center sm:pt-2">
          <p className="sm:text-xl">
            Hello, my name is Edgar Munoz and I recently graduated from the University of California 
            Santa Cruz with a BS in Computer Science. I am a first-generation college graduate looking 
            to get into the tech industry. I have experience working in full-stack web development and 
            below are some projects I worked on.
          </p>
        </div>
        <div className="py-8 gap-4">
          <a href="https://www.linkedin.com/in/emunoz18/" target="_blank">
            <button className="pr-8">
              <img src="linkedin.svg" width="50px"></img>
            </button>
          </a>
          <a href="mailto:munozedgar510@gmail.com" target="_blank">
            <button className="pr-8">
              <img src="email.svg" width="50px"></img>
            </button>
          </a>
          <a href="https://www.github.com/hiddenshadows" target="_blank">
            <button className="btn btn-circle">
              <img src="github-mark.svg"></img>
            </button>
          </a>
        </div>
      </div>
    </div>
    
  )
}