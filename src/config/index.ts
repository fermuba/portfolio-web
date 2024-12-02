import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Fernando Mubarqui — Data Scientist",
  author: "Fernando Mubarqui",
  description:
    "Based in Santiago, Argentina. I specialize in machine learning, data cleaning, and creating impactful visualizations using Power BI.",
  lang: "en",
  siteLogo: "/fernando-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
  //  { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/fermuba" },
    { text: "Github", href: "https://github.com/fermuba" },
  //  { text: "Youtube", href: "https://github.com/immois/astro-zen" },
  //  { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Fernando Mubarqui",
    specialty: "Data Scientist",
    summary:
      "Based in Santiago, Argentina. I specialize in machine learning, data cleaning, and creating impactful visualizations using Power BI.",
    email: "fermuba@msn.com",
  },
  experience: [
    {
      company: "Bedu",
      position: "Expert Data Scientist (Internship)",
      startDate: "Jan 2024",
      endDate: "Present",
      summary: [
        "Taught Machine Learning concepts and techniques to students and professionals, focusing on practical applications.",
        "Developed educational materials and resources, including hands-on projects and comprehensive guides.",
        "Guided students through practical exercises and projects, ensuring the application of theoretical knowledge.",
        "Evaluated student progress and provided constructive feedback to foster continuous improvement."
      ],
    },
    {
      company: "Henry",
      position: "Teaching Assistant (Data Scientist)",
      startDate: "Jun 2023",
      endDate: "Sept 2023",
      summary: [
        "Coordinated a group of students to help them adapt to the program effectively.",
        "Guided students through the initial stages of the course and addressed their questions and concerns.",
        "Supported students in solving exercises and encouraged teamwork through pair programming.",
        "Suggested improvements to Bootcamp processes to enhance the learning experience.",
        "Fostered group cohesion and built a sense of community among students."
      ],
    },
    {
      company: "Henry",
      position: "Teaching Assistant (Data Scientist)",
      startDate: "Sept 2023",
      endDate: "Jun 2024",
      summary: [
        "Continued providing guidance and mentorship to Data Science students, ensuring smooth adaptation to the program.",
        "Assisted with the resolution of exercises and encouraged collaboration using pair programming techniques.",
        "Implemented strategies to promote group cohesion and strengthen the student community.",
        "Proposed innovative ideas to optimize Bootcamp processes and improve student outcomes."
      ],
    },
  ],
  projects: [
    {
      name: "Review Insights",
      summary: "A data analytics platform designed to provide wineries and wine bars in the U.S. with insights into customer reviews. This project focuses on categorizing reviewers, analyzing scores, and highlighting key aspects of customer feedback to drive strategic decision-making in the wine industry.",
      linkPreview: "https://review-insights.streamlit.app/", 
      linkSource: "https://github.com/fermuba/proyectogrupal",
      image: "/review-insights.png",
    },
    
//    {
//      name: "Shopp App",
//      summary: "An e-commerce platform that replicates Shopify's key features.",
//      linkPreview: "/",
//      linkSource: "https://github.com/immois/astro-zen",
//      image: "/shopify-clon.png",
//    },
//    {
//      name: "ClonTagram",
//      summary: "A social network that replicates the features of Instagram",
//      linkPreview: "/",
//      linkSource: "https://github.com/immois/astro-zen",
//      image: "/clone-ig.png",
//    },
  ],
  about: {
    description: `
      I’m Fernando Mubarqui, a Data Scientist passionate about data analysis, Machine Learning, and Power BI. 
      I love transforming data into practical solutions and tangible results. 
      I combine technical expertise with an entrepreneurial mindset to create customized solutions that optimize workflows, automate processes, and generate valuable insights. 
      I also enjoy sharing knowledge and inspiring others as a data science instructor.
    `,
    image: "/fernando-big.jpg",
  },
};

// #5755ff
