'use client';

import React, { useState } from "react";

export default function Projects() {
  const [slack, changeSlack] = useState(0)
  const [inter, changeInter] = useState(0)
  const [biz, changeBiz] = useState(0)

  const projects = [
    {
      name: 'Slack Clone',
      description: `A full-stack clone of Slack with a server side rendered landing page, 
        login page, signup page, and home page. In the homepage you can see you workspaces and 
        the different channels in the workspace as well as messages. you can also send messages and
        create new workspaces and/or channels. Created using React, Next.js, Node.js, GraphQL, 
        PostgresSQL and MUI`,
      img: ['images/SlackLandingPage.png', 'images/SlackLogin.png'],
      link: 'https://tiered-web-app-fe-sn7yhk7rkq-uw.a.run.app/',
      git: 'https://gitfront.io/r/hiddenshadows/sWi6Dudj2FDt/SlackClone/',
      stateVar: slack,
      next() {
        if(slack === 0) {
          changeSlack(1)
        } else {
          changeSlack(0)
        }
      },
      prev() {
        if(slack === 0) {
          changeSlack(1)
        } else {
          changeSlack(0)
        }
      }
    },
    {
      name: 'InterNews',
      description: `A group project that shows news throughout the whole world.
        It has an interactive map and in which you can click on any country and 
        see the news from that country. You can also create an account and bookmark news
        articles. It was made with HTML, CSS, Javascript and Firebase for backend and database.`,
      img: ['images/InternewsHome.png', 'images/InternewsUS.png'],
      link: 'https://internews-365121.web.app/index.html',
      git: 'https://internews-365121.web.app/index.html',
      stateVar: inter,
      next() {
        if(inter !== projects[1].img.length - 1){
          changeInter(inter + 1)
        } else {
          changeInter(0)
        }
      },
      prev() {
        if(inter === 0) {
          changeInter(projects[1].img.length - 1)
        } else {
          changeInter(inter - 1)
        }
      }
    },
    {
      name: `Bizzare`,
      description: `A group project that is a marketplace similar to Offerup or Craigslist.
        You can view items while being logged out and when you login you can upload your own
        things to sell. Built using the micro services architechture. Created using React, Next.js, 
        Node.js, GraphQL, PostgresSQL and MUI`,
      img: ['images/BIZarreHome.png', 'images/BIZarreCreate.png', 'images/BIZarreI18EditPost.png', 'images/BIZarreInbox.png', 'images/BIZarreItem.png', 'images/BIZarreSearch.png'],
      link: '#',
      git: 'https://gitfront.io/r/hiddenshadows/4hyU1mshK5TW/CSE187Project/',
      stateVar: biz,
      next() {
        if(biz !== projects[2].img.length - 1){
          changeBiz(biz + 1)
        } else {
          changeBiz(0)
        }
      },
      prev() {
        if(biz === 0) {
          changeBiz(projects[2].img.length - 1)
        } else {
          changeBiz(biz - 1)
        }
      }
    },
  
  ]

  return (
    <div className="container mx-auto px-8">
      <a id="projects"></a>
      <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-4xl text-center p-2">
        Projects
      </h1>
      {projects.map( proj => 
        <div key={proj.name} className="card lg:card-side bg-base-200 shadow-xl my-8">
          <figure>
            {/* <img src={proj.img} alt="Screenshot"/> */}
            <div className="carousel w-full">
              <div id={`slide${Math.floor(Math.random() * 10)}`} className="carousel-item relative w-full">
                <img src={proj.img[proj.stateVar]} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a onClick={proj.prev} className="btn btn-circle">❮</a> 
                  <a onClick={proj.next} className="btn btn-circle">❯</a>
                </div>
              </div> 
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{proj.name}</h2>
            <p>{proj.description}</p>
            <div className="card-actions justify-end">
              <a href={proj.git} target="_blank">
                <button className="btn btn-circle">
                  <img src="github-mark.svg"></img>
                </button>
              </a>
              {/* <a href={proj.link} target="_blank">
                <button className="btn btn-black">Link
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#A1A8B4" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                </button>
              </a> */}
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}