'use client';

import React from "react";

const projects = [
  {
    name: 'Slack Clone',
    description: `A full-stack clone of Slack with a server side rendered landing page, 
      login page, signup page, and home page. In the homepage you can see you workspaces and 
      the different channels in the workspace as well as messages. you can also send messages and
      create new workspaces and/or channels. Created using React, Next.js, Node.js, GraphQL, 
      PostgresSQL and MUI`,
    img: 'images/SlackLandingPage.png',
    link: 'https://tiered-web-app-fe-sn7yhk7rkq-uw.a.run.app/'
  },
  {
    name: 'InterNews',
    description: `A group project that shows news throughout the whole world.
      It has an interactive map and in which you can click on any country and 
      see the news from that country. You can also create an account and bookmark news
      articles. It was made with HTML, CSS, Javascript and Firebase for backend and database.`,
    img: 'images/InternewsHome.png',
    link: 'https://internews-365121.web.app/index.html'
  },
  {
    name: `Bizzare`,
    description: `A group project that is a marketplace similar to Offerup or Craigslist.
      You can view items while being logged out and when you login you can upload your own
      things to sell. Built using the micro services architechture. Created using React, Next.js, 
      Node.js, GraphQL, PostgresSQL and MUI`,
    img: 'url',
    link: '#'
  },

]

export default function Projects() {
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-4xl text-center p-2">
        Projects
      </h1>
      {projects.map( proj => 
        <div className="card lg:card-side bg-base-200 shadow-xl my-8">
          <figure>
            <img src={proj.img} alt="Screenshot"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{proj.name}</h2>
            <p>{proj.description}</p>
            <div className="card-actions justify-end">
              <div>
                <button className="btn btn-circle">
                  <img src="github-mark.svg"></img>
                </button>
              </div>
              <a href={proj.link} target="_blank">
                <button className="btn btn-black">Link
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#A1A8B4" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}