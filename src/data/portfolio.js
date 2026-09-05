export const profile = {
  name: "Shalu Jawla",
  title: "Software Development Engineer",
  tagline: "Cloud-ready full-stack apps, practical backend systems, and client-facing delivery.",
  location: "Noida, Uttar Pradesh, India",
  email: "jawlashalu6@gmail.com",
  phone: "9368107932",
  linkedin: "https://linkedin.com/in/shalu-jawla-3b8366238",
  hackerRank: "https://www.hackerrank.com/profile/jawlashalu6",
  github: "https://github.com/Shalu37",
  summary:
    "Software Development Engineer with 2+ years of experience building full-stack, cloud-ready applications in Node.js, Spring Boot, Java, and React. I work across SQL and NoSQL databases, Docker, Kubernetes basics, CI/CD, and client-facing delivery - turning real requirements into systems that hold up in production.",
};

export const highlights = [
  ["2+ yrs", "Full-stack engineering experience"],
  ["5+", "Enterprise client projects"],
  ["15+", "Production releases coordinated"],
  ["20%", "Average API response-time reduction"],
  ["25%", "Reduction in post-release bugs"],
  ["30%", "MongoDB query-performance improvement"],
];

export const experience = [
  {
    role: "Software Developer",
    org: "SuperHumanRace",
    meta: "Nov 2024 - Present",
    place: "Delhi, India",
    bullets: [
      "Build and maintain full-stack features for 5+ enterprise clients across PHP, Java/Spring Boot, Node.js, Python, React, jQuery, Ajax, MySQL, and PostgreSQL.",
      "Act as a technical point of contact on client calls, gather requirements, and translate them into realistic build plans.",
      "Improved API response times by about 20% and reduced post-release bugs by roughly 25% through cleaner code and unit testing with JUnit and Jest.",
      "Coordinate distributed teams through 15+ production releases using GitHub Actions CI/CD pipelines.",
    ],
    tags: ["Spring Boot", "Node.js", "React", "Python", "PostgreSQL", "CI/CD"],
  },
  {
    role: "SDE-1 Trainee",
    org: "NBCS Technologies Pvt. Ltd.",
    meta: "Sep 2024 - Oct 2024",
    place: "Noida, India",
    bullets: [
      "Worked on authentication and payment modules across 3 product workflows using Node.js and SQL/NoSQL databases.",
      "Optimized MongoDB schemas and improved query performance by around 30%.",
      "Built and tested 10+ RESTful APIs with validation and modular code, reducing duplicate logic by roughly 15%.",
    ],
    tags: ["Node.js", "MongoDB", "REST APIs", "Payments", "Authentication"],
  },
  {
    role: "SDE-1 Intern",
    org: "Bharti Airtel",
    meta: "Jan 2024 - Jul 2024",
    place: "Gurgaon, India",
    bullets: [
      "Built a knowledge-based conversational system connected to a Java/Spring Boot backend through REST APIs.",
      "Handled 20+ query categories with real-time responses and improved resolution accuracy by about 35%.",
      "Helped auto-resolve close to 40% of queries without human intervention.",
    ],
    tags: ["Java", "Spring Boot", "Botpress", "MySQL", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Concurrent Banking Transaction Engine",
    type: "Backend system",
    stack: "Java, Spring Boot, PostgreSQL, JPA/JDBC, JUnit, Docker",
    description:
      "A bank-grade transaction engine that safely handles simultaneous withdrawal requests without incorrect balances.",
    impact:
      "Uses row-level locking, transactions, isolation tuning, rollback handling, audit logs, and JUnit integration tests for concurrency scenarios.",
    tags: ["backend", "database", "docker", "testing"],
  },
  {
    title: "Smart Database Query Optimizer",
    type: "Full-stack tool",
    stack: "Java, Spring Boot, PostgreSQL, JDBC, REST API, Docker",
    description:
      "A tool that parses SQL queries, reads live PostgreSQL table statistics and indexes, and recommends composite indexes.",
    impact:
      "Includes EXPLAIN ANALYZE plans, query history dashboard, REST APIs, and Docker Compose setup.",
    tags: ["backend", "database", "docker", "frontend"],
  },
  {
    title: "Instant Loan Management System",
    type: "Backend product",
    stack: "Node.js, MongoDB, JWT",
    description:
      "Designed and built the backend for authentication, payments, and the full API layer, mostly solo.",
    impact:
      "Added JWT-based auth and reworked MongoDB schemas so CRUD operations ran about 30% faster.",
    tags: ["backend", "database", "auth"],
  },
  {
    title: "Botpress Chatbot Integration",
    type: "AI workflow integration",
    stack: "Java, Spring Boot, MySQL, Botpress",
    description:
      "Knowledge-base chatbot connected to a Spring Boot backend through REST APIs for real-time support flows.",
    impact:
      "Covered 20+ query categories, improved resolution accuracy by about 35%, and auto-resolved close to 40% of queries.",
    tags: ["backend", "ai", "database"],
  },
  {
    title: "SuperHumanRace Platform",
    type: "Production platform",
    stack: "React, Node.js, Java/Spring Boot, REST APIs",
    description:
      "Worked across frontend and backend for a multi-product platform covering CSR, ESG, and EE solutions.",
    impact:
      "Built user-facing features, backend logic, and API integrations so data flowed cleanly between client and server.",
    tags: ["frontend", "backend", "production"],
  },
  {
    title: "Noisy Notes",
    type: "Music website",
    stack: "HTML5, CSS3, JavaScript, PHP, MySQL, Docker",
    description:
      "A responsive music site with authentication, music listings, add-to-favorites, and subscription-plan support.",
    impact:
      "Backed by 6 core SQL tables and containerized with Docker for reproducible setup.",
    tags: ["frontend", "backend", "database", "docker"],
  },
  {
    title: "Face Heaven",
    type: "Organic e-commerce platform",
    stack: "HTML5, CSS3, JavaScript, PHP, MySQL, AWS S3",
    description:
      "E-commerce workflows with secure transactions, admin dashboards, and role-based access for admin, vendor, and customer users.",
    impact:
      "Used AWS S3 for product images and reduced manual order-tracking work by about 40%.",
    tags: ["frontend", "backend", "cloud", "database"],
  },
];

export const skillGroups = [
  ["Languages", ["Java", "JavaScript", "TypeScript", "Python", "PHP", "C++"]],
  ["Backend & Cloud", ["Node.js", "NestJS", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]],
  ["Databases", ["MySQL", "PostgreSQL", "MongoDB", "Redis"]],
  ["Frontend", ["React", "HTML5", "CSS3", "JavaScript", "jQuery", "Ajax"]],
  ["DevOps", ["Docker", "Kubernetes basics", "CI/CD", "GitHub Actions", "Git"]],
  ["Architecture & Practices", ["System Design", "MVC", "JWT Authentication", "Design Patterns", "Agile/Scrum"]],
  ["Testing & Tools", ["JUnit", "Mockito", "Jest", "Postman", "Maven"]],
];

export const education = [
  ["2024", "Master of Computer Applications", "Banasthali University, Jaipur"],
  ["2022", "Bachelor of Computer Applications", "Banasthali University, Jaipur"],
];
