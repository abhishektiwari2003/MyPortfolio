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
  Java,
  healthipeople,
  happyday,
  eCell,
  Forage,
  MoodSic,
  youtube,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: Java,
  },
];

const experiences = [
  {
    title: "Maths Problem Solver",
    company_name: "Happy Day Technologies",
    icon: happyday,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: [
      "Solved complex mathematics problems at the IIT JEE and RMO level, demonstrating expertise in algebra, calculus, geometry, number theory, and other advanced mathematical concepts.",
      "Provided accurate and efficient solutions with clear explanations, enabling students to understand the reasoning and logic behind each solution.",
      "Developed and employed effective problem-solving techniques, strategies, and shortcuts to solve problems efficiently within given time constraints.",
      "Supported students through online platforms by answering questions, clarifying doubts, and explaining concepts to enhance their learning experience.",
    ],
  },
  {
    title: "React JS Developer",
    company_name: "ECell",
    icon: eCell,
    iconBg: "#E6DEDD",
    date: "August 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Forage Deloitte",
    icon: Forage,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Participated in the Forage Deloitte virtual internship program, gaining valuable insights into the professional world of Deloitte",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engaged in interactive modules and simulations, obtaining hands-on experience in various areas of business and consulting.",
      "Leveraged problem-solving and critical thinking skills to tackle realistic business scenarios and provide innovative solutions.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Healthipeople",
    icon: healthipeople,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrated APIs and backend services to fetch and display data dynamically, providing real-time information to users",
      "Conducted thorough testing and debugging to identify and resolve frontend issues, ensuring seamless functionality and high-quality user interfaces",
      "Stayed updated with the latest frontend technologies, trends, and industry best practices, actively contributing to the continuous improvement of frontend development processes at Healthipeople.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tiwari is an exceptional Frontend Developer, consistently delivering high-quality solutions and enhancing user experiences. Highly recommended.",
    name: "Arun Kutty",
    designation: "Principal Software Engineer",
    company: "Oracle",
    image:
      "https://gochronicles.com/content/images/size/w300/2021/04/profile.jpeg",
  },
  {
    testimonial:
      "Brilliant teen, exceptionally working in every terms and delivers what team needs.",
    name: "Nikhil Akki",
    designation: "Manager",
    company: "Deloitte",
    image: "https://avatars.githubusercontent.com/u/17634231?v=4",
  },
  {
    testimonial:
      "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Swaraj Panigrahi",
    designation: "Lead Software Engineer",
    company: "JP Morgan Chase & Co",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHswjzO4Pit8w/profile-displayphoto-shrink_800_800/0/1522567963559?e=1726704000&v=beta&t=LRVlDKR61AjjFHKiuzy6oMlmNgWi2DVmwt8BdToOTdI",
  },
];

const projects = [
  {
    name: "MoodSic",
    description:
      "MoodSic helps user to find the perfect music according to their mood to enhance the user's experience. MoodSic allows the user to play music on the app only via Spotify without downloading the app. MoodSic allows the user to listen to music without any interruptions as the user is listening to music via client’s account.",
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
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: MoodSic,
    source_code_link: "https://github.com/abhishektiwari2003/MoodSic",
  },
  {
    name: "YouTube Clone",
    description:
      "A YouTube clone project aims to replicate the core features and functionalities of the popular video-sharing platform, YouTube. It involves creating a web or mobile application that allows users to upload, view, and share videos with others.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link:
      "https://github.com/abhishektiwari2003/YouTube_Assignment1",
  },
  {
    name: "Travel Blog Website",
    description:
      "A travel blog website is an online platform that provides a space for travel enthusiasts, bloggers, and explorers to share their travel experiences, stories, tips, and recommendations with a wider audience. It serves as a digital platform to inspire, educate, and entertain readers who are interested in travel and adventure",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/5cientist/travel-blog",
  },
];

export { services, technologies, experiences, testimonials, projects };
