import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    movecc,
    moveHome,
    tsuberProperties,
    beachHavenLogo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Move Christian Church",
      icon: movecc,
      iconBg: "#383E56",
      date: "August- 2023, Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
         "Solo Full-Stack project implementing user-authentication to secure data given to the church"
      ],
    },

    {
      title: "Full-Stack Developer",
      company_name: "Freelance | Real Estate Agent",
      icon: beachHavenLogo,
      iconBg: "#383E56",
      date: "October - 2023",
      points: [
        "Developed application for real estate agent to store their customers, add new customers, give information about the area.",
        "Implemented a responsive design and ensured cross-browser compatibility.",
        "Implemented security measures to keep user data safe and secure."
      ]
    }
   
 
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Move Christian Church",
      description:
        "Web application to perform all functions this church needs to keep users updated.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: moveHome,
      source_code_link: "https://github.com/IdeclareWar406/production/tree/main/moveChristianChurch",
    },

    {
      name: "Real Estate Agent Site",
      description: "Application to keep track of customer information and to add new customers with built in emailer",
      tags:[
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "mongodb",
          color: "green-text-gradient"
        },
        {
          name: "node",
          color: "pink-text-gradient"
        }
      ]
      ,
      image: tsuberProperties,
      source_code_link: "https://github.com/IdeclareWar406/production/tree/main/tsuberProperties"
    }
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };