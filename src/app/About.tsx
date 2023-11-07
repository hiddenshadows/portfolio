'use client';

import React from "react";


export default function About() {
  return (
    <div className="container mx-auto px-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-4xl text-center p-5">
          About Me
        </h1>
      </div>
      <div className="gap-4 columns-2 content-center display-inline">
        <div className="img">
          <img 
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Portrait-Photographers-Yousuf-Karsh-King.jpg"
            width="75%"
            />
        </div>
        <div className="content-center">
          <p className="">
            Hello, my Name is Edgar Munoz and I am a recent graduate from the Univeristy of California
            Santa Cruz with a BS in Computer Science. I am a first generation college graduate looking
            to get into the tech industry. I have experience working in full stack web development and
            below are some projects I worked on.
          </p>
        </div>
      </div>
    </div>
    
  )
}