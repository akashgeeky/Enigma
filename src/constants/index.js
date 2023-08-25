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
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Events",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "GameDev Committee",
    icon: web,
  },
  {
    title: "WebDev Committee",
    icon: mobile,
  },
  {
    title: "Systems Committee",
    icon: backend,
  },
  // {
  //   title: "Marketing Committee",
  //   icon: creator,
  // },
  {
    title: "Events Committee",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "2022",
    company_name: "Year 3",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Hacktoberfest 2022 Introduction",
      "Intro to Python",
      "2022 Batch Orientation",
      "Understanding APIs",
      "Code Wars [0]: Battleship",
      "Google Hash Code - Introductory session",
    ],
  },
  {
    title: "2021",
    company_name: "Year 2",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Dec 2021",
    points: [
      "2021 Batch Orientation",
      "Hacktoberfest 2021 Introduction",
      "Digital Images livestream",
      "How does WhatsApp work? livestream",
      "Map Generation in Games livestream",
      "Linux Introductory session",
    ],
  },
  {
    title: "2020",
    company_name: "Year 1",
    icon: logo,
    iconBg: "#383E56",
    date: "Oct 2020 - Dec 2020",
    points: [
      "Python Mini Project",
      "Introduction to Python",
      "2020 Batch Orientation",
      "Hacktoberfest 2020 Introduction",
    ],
  },
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
      "Inspiring community, real-world challenges. Enigma deepened my coding skills and led to amazing friendships.",
    name: "Aarav",
    designation: "CSE, Batch",
    company: "2022",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Confidence builder. Joining the Enigma Club was the best choice I made! Thankful for the supportive and inspiring atmosphere.",
    name: "Aisha",
    designation: "ECE, Batch",
    company: "2021",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Empowering, enriching, and enjoyable! Enigma ignited my passion for technology and equipped me for future success.",
    name: "Arjun",
    designation: "AI, Batch",
    company: "2022",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Python Project",
    description:
      "Python projects use the language's versatility for web development, data analysis, machine learning, and automation, benefiting from its simplicity and robust library support.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "data-science",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "#",
  },
  {
    name: "Code Wars",
    description:
      "Gamified coding challenges, fostering skill development with a supportive community. Progress through levels, earn ranks, and enhance coding abilities.",
    tags: [
      {
        name: "compcoding",
        color: "blue-text-gradient",
      },
      {
        name: "CTF",
        color: "green-text-gradient",
      },
      {
        name: "Bounty",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
  },
  {
    name: "APIs",
    description:
      "APIs (Application Programming Interfaces) enable seamless data exchange between applications, driving innovation and enhancing user experiences across platforms.",
    tags: [
      {
        name: "REST",
        color: "blue-text-gradient",
      },
      {
        name: "SOAP",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
