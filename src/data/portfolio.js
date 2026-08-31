export const profile = {
  name: "Shalu Jawla",
  title: "Software Developer",
  location: "Noida, Uttar Pradesh, India",
  email: "jawlashalu6@gmail.com",
  phone: "9368107932",
  linkedin: "https://linkedin.com/in/shalu-jawla-3b8366238",
  hackerRank: "https://www.hackerrank.com/profile/jawlashalu6",
  summary:
    "Software Developer with 1.5+ years across three teams — building secure APIs in Java & Spring Boot, full-stack features in Node.js and React, and now containerizing and deploying them with Docker and AWS.",
};

export const metrics = [
  ["1.5+ yrs", "Experience"],
  ["3", "Organizations"],
  ["10+", "APIs shipped"],
  ["~25%", "Fewer prod bugs"],
];

export const stack = [
  "Java · Core + Streams",
  "Spring Boot · REST & Security",
  "Node.js · Runtime",
  "NestJS · Modular APIs",
  "React · Frontend",
  "MongoDB · Schema Design",
  "MySQL · Relational",
  "Docker · Containers",
  "AWS · S3 · EC2",
  "Git · Version Control",
];

export const experience = [
  {
    role: "Software Developer — Product Development",
    org: "@ SuperHumanRace",
    meta: "Nov 2024 — Present · Delhi, India",
    nodes: ["spring", "node", "docker"],
    bullets: [
      "Design and build full-stack solutions spanning backend (PHP, Java/Spring Boot, Node.js) and frontend (HTML, CSS, JavaScript, React) for 5+ enterprise clients across diverse industries.",
      "Architect technical solutions and write clean, optimized, well-debugged code — cutting production bugs by ~25% and average API response time by ~20%.",
      "Containerize services with Docker for consistent local and deployment environments; coordinate 15+ production releases across cross-functional teams.",
    ],
    tags: ["Spring Boot", "Node.js", "React", "Docker"],
  },
  {
    role: "SDE-1 — Trainee",
    org: "@ NBCS Technologies",
    meta: "Sep 2024 — Oct 2024 · Noida, India · Loan Application System",
    nodes: ["node", "mongo"],
    bullets: [
      "Built backend modules for user authentication, loan management, and payments across 3 core workflows.",
      "Designed and optimized MongoDB schemas for efficient CRUD operations, improving query performance by ~30%.",
      "Built 10+ secure RESTful APIs using NestJS and TypeScript with proper validation and modular architecture.",
    ],
    tags: ["NestJS", "TypeScript", "MongoDB"],
  },
  {
    role: "SDE-1 — Intern",
    org: "@ Bharti Airtel",
    meta: "Jan 2024 — Jul 2024 · Gurgaon, India · Botpress Chatbot Integration",
    nodes: ["spring", "rest"],
    bullets: [
      "Built a knowledge-based chatbot using Botpress handling 20+ query categories with real-time responses.",
      "Integrated the chatbot with a Spring Boot backend via REST APIs.",
      "Implemented dynamic response generation, improving resolution accuracy by ~35%.",
    ],
    tags: ["Spring Boot", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Noisy Notes",
    description:
      "Music e-commerce platform with authentication, product listings, and cart functionality across 100+ listings — containerized for consistent deployment.",
    stack: "HTML5, CSS3, JS, PHP, MySQL",
    focus: "Order & user logic, responsive UI",
    tags: ["backend", "frontend", "cloud"],
    chips: ["MySQL", "Docker"],
  },
  {
    title: "Face Heaven",
    description:
      "Organic e-commerce platform with secure transaction workflows, role-based admin dashboards, and image storage on AWS S3.",
    stack: "HTML5, CSS3, JS, PHP, MySQL",
    focus: "Admin dashboards, 3-tier access control",
    tags: ["backend", "cloud"],
    chips: ["AWS S3", "RBAC"],
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency conversion across 150+ pairs, rebuilt with a React front end for instant updates without page reloads.",
    stack: "Java, REST APIs, React",
    focus: "Third-party API integration, live UI state",
    tags: ["backend", "frontend"],
    chips: ["React", "REST"],
  },
];

export const skillLayers = [
  ["01", "Languages", ["Java", "JavaScript", "TypeScript", "PHP", "C++"]],
  ["02", "Frameworks & Libraries", ["Spring Boot", "Node.js", "NestJS", "Express.js", "React"]],
  ["03", "Databases", ["MySQL", "MongoDB"]],
  ["04", "Cloud & DevOps", ["AWS S3", "AWS EC2", "Docker", "Git", "GitHub Actions"]],
  ["05", "Architecture & Concepts", ["REST APIs", "Microservices", "OOP", "MVC", "JWT Auth", "Design Patterns"]],
];

export const skillBars = [
  ["Java / Spring Boot", 90],
  ["Node.js / NestJS", 85],
  ["MongoDB / MySQL", 80],
  ["React", 65],
  ["Docker / AWS", 55],
];

export const education = [
  ["2024", "Master of Computer Applications (MCA)", "Banasthali University, Jaipur"],
  ["2022", "Bachelor of Computer Applications (BCA)", "Banasthali University, Jaipur"],
];

export const terminalResponses = {
  whoami: "Shalu Jawla — Software Developer, 1.5+ yrs. Java · Spring Boot · Node.js · React. Based in Noida, India.",
  skills: "Languages: Java, JavaScript, TypeScript, PHP\nFrameworks: Spring Boot, Node.js, NestJS, React\nDatabases: MySQL, MongoDB\nCloud/DevOps: AWS (S3, EC2), Docker",
  experience: "SuperHumanRace — Software Developer (Nov 2024–Present)\nNBCS Technologies — SDE-1 Trainee (Sep–Oct 2024)\nBharti Airtel — SDE-1 Intern (Jan–Jul 2024)",
  contact: "email: jawlashalu6@gmail.com\nphone: 9368107932\nlinkedin: linkedin.com/in/shalu-jawla-3b8366238",
  help: "Try: whoami, skills, experience, contact, clear",
};