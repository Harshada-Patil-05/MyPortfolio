// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


// Experience Section Logo's
import edunetLogo from "./assets/company_logo/edunet-partners.jpg";
import OasisLogo from "./assets/company_logo/Oasis_Info_logo.jpg";

// Education Section Logo's
import DYPLogo from './assets/education_logo/DYPIEMRLogo.avif';
import JaihindLogo from './assets/education_logo/JaihindLogo.jpg';
import gurukulLogo from './assets/education_logo/gurukul.jpg';

// Project Section Logo's
import WanderWayLogo from "./assets/work_logo/WanderWayLogo.png";
import PizzaHubLogo from "./assets/work_logo/PizzaHub.png";
import PortfolioLogo from './assets/work_logo/PortfolioLogo.png';

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: OasisLogo,
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    date: "January 2026 - February 2026",
    desc: "Worked as a Web Developer Intern at Oasis Infobyte (AICTE OIB-SIP), where I developed production-ready MERN stack applications with secure authentication, optimized REST APIs, and responsive UI, gaining hands-on experience in real-world software development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "MongoDb",
      "REST API",
      "Git & Github",
    ],
  },
  {
    id: 2,
    img: edunetLogo,
    role: "Frontend Developer Intern",
    company: "Edunet",
    date: "August 2025 - September 2025",
    desc: "Completed a 6-week Front-End Web Development internship with Edunet Foundation (AICTE and IBM SkillsBuild), where I built responsive web interfaces and improved my UI/UX and modern front-end development skills.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Git & Github",
      "Responsive Design",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: DYPLogo,
    school:  "Dr. D. Y. Patil Institute of Engineering, Management & Research (DYPIEMR), Akurdi",
    date: "Sept 2023 - June 2027",
    grade: " Aggregate - 9.56",
    desc: "I am currently pursuing my Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science and am in my third year of study. Throughout my academic journey, I have developed a strong foundation in programming, data structures, algorithms, machine learning and database management systems. I have worked on practical projects and participated in technical activities that enhanced my analytical thinking and problem-solving skills. My coursework and hands-on experience are helping me build a solid understanding of AI-driven solutions and modern software development practices.",
    degree: "Bachelor of Engineering - Artificial Intelligence & Data Science",
  },
  {
    id: 1,
    img: JaihindLogo,
    school:  "Jaihind Madhyamik va Uccha Madhyamik Vidyalaya, Chalisgaon, Jalgaon",
    date: "Completed: 2023",
    grade: "80%",
    desc: "I completed my Higher Secondary Education (HSC) from Jaihind Madhyamik va Uccha Madhyamik Vidyalaya, Chalisgaon, Jalgaon. During this period, I studied core subjects including Mathematics, Physics, Biology, and Chemistry, which helped me build a strong analytical and logical foundation. This phase played an important role in developing my interest in engineering and technology.",
    degree: "12th Grade (HSC)",
  },
  {
    id: 2,
    img: gurukulLogo,
    school: "Tatyasaheb Samant Madhyamik Vidyalaya, Chalisgaon, Jalgaon",
    date:  "Completed: 2021",
    grade: "96.6%",
    desc:  "I completed my Secondary School Certificate (SSC) from Tatyasaheb Samant Madhyamik Vidyalaya, Chalisgaon, Jalgaon, securing 96.6%. During this period, I built a strong academic foundation across core subjects, developing discipline, consistency, and analytical skills that continue to support my academic and professional growth.",
    degree: "10th Grade (SSC)",
  },
];

export const projects = [
  {
    id: 0,
    title: "WanderWay – Full-Stack Stay Discovery Platform",
    description:
      "WanderWay is a full-stack stay discovery platform built to understand how real-world web applications handle authentication, data relationships, media storage, and deployment.The application allows users to explore and manage stay listings, upload images using cloud storage, write reviews, and interact through a secure, role-based system.The project follows RESTful routing and MVC architecture, includes server-side validation, and is fully deployed on the cloud with environment-based configuration.",
    image: WanderWayLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React JS",
      "REST API",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
    ],
    github:
      "https://github.com/Harshada-Patil-05/WanderWay.git",
    webapp: "https://wanderway-a753.onrender.com/",
  },
  {
    id: 1,
    title: "PizzaHub – Online Pizza Delivery System",
    description:
      "PizzaHub is a full-stack online pizza delivery web application built using the MERN stack. The application allows users to browse pizzas, customize sizes, add items to their cart, and place secure online orders. It features JWT-based authentication and authorization, dynamic cart and order management, Razorpay payment integration, an admin dashboard for managing pizzas and orders, inventory management, email notifications using Nodemailer, and a responsive user interface.",
    image: PizzaHubLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS"
    ],
    github: "https://github.com/Harshada-Patil-05/PizzaHub.git",
    webapp: "https://pizzahub-online.vercel.app/",
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
  "A responsive personal portfolio website built to showcase my projects, skills, and experience. It features interactive project sections, smooth animations, responsive design, and optimized performance for all devices.",
    image: PortfolioLogo,
    tags: ["HTML" , "React JS", "Tailwind CSS", "JavaScript", "Responsive Design", "Framer Motion"],
    github: "https://github.com/Harshada-Patil-05/MyPortfolio.git",
    webapp: "https://www.harshadapatil.online/",
  },
];
