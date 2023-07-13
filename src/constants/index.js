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
    java,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,

    AbsoluteImpact,

    threejs,
    csharp,
    cpp,
    python,
    AIwebsite,
    CinePrime,
    PlanIt,
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
      title: "Graphics Engine Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "VR Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "Java",
      icon: java,
    },
    {
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [

    {
      title: "Web Developer",
      company_name: "Absolute Impact",
      icon: AbsoluteImpact,
      iconBg: "#383E56",
      date: "Nov 2022 - May 2023",
      points: [
        "Developing and maintaining web applications using Wordpress and other related technologies.",
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in Agile Development to ensure an well constructed website in a short amount of time",
      ],
    },
    //Example Piece:
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Tiffany Kula",
      designation: "CEO",
      company: "Absolute Impact",
      image: "",
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
      name: "Absolute Impact",
      description:
        "(Capstone) Web-based platform that allows users to search, book, and manage teletherapy services through Simple Practice, providing a convenient and efficient solution for Therapy and Wellness needs.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Agile",
          color: "pink-text-gradient",
        },
      ],
      image: AIwebsite,
      source_code_link: "https://absoluteimpactllc.com/",
    },
    {
      name: "CinePrime",
      description:
        "Mock web-based platform that allows users track movies, having basic login functionality (dont use any real information) , adding movies to users watchlist, and viewing movie contents with embedded trailer for movie.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "Cs",
          color: "pink-text-gradient",
        },
      ],
      image: CinePrime,
      source_code_link: "https://github.com/IDassow/Simple_ASP_MovieList_Website_Project",
    },
    {
      name: "PlanIt",
      description:
        "A GUI-Based webscrapping-app for finding the cheapest flights and sending the user a weekly update on those prices.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "CustomTkinter",
          color: "pink-text-gradient",
        },
      ],
      image: PlanIt,
      source_code_link: "https://github.com/IDassow/Cheapest-Flights-Webscrapper",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };