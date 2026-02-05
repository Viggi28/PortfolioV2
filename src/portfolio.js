import LegalContractImage from './Assets/Legal_contract.jpg'
import DiningConciergeImage from './Assets/Dining_concierge.png'
import InterviewUnlockedImage from './Assets/Interview_unlocked.png'
import TcrEpitopeImage from './Assets/TCR_epitope.jpg'
import CollabIoImage from './Assets/Collabio.jpg'
import DdosImage from './Assets/DDOS.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://viggi28.github.io/PortfolioV2',
  title: 'VM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vignesh Mohan',
  role: 'Software Engineer - AI & Full Stack ',
  picture: 'portfolio_dp.jpeg', // put your photo in public/images/profile.jpg (or use .png)

 description: `Hi, I'm Vignesh — a Master's student in Computer Science at Arizona State University, specializing in Agentic AI and Cloud Native Applications.

I bring **3+ years** of **full-stack** engineering experience across fintech and research. At **Standard Chartered**, I co-developed an enterprise trade platform processing millions of daily transactions. Currently, I'm a **Research Software Developer** at the **Biodesign Institute** desgining and managing genomic databases.

My interests center around LLM-powered agent systems, multi-agent AI architectures, LLM inferencing, retrieval augmented generation and cloud-native applications.

Outside of code, you'll find me sending boulder problems or logging laps in the pool. Happy to connect if you’re hiring or want to talk all things tech :)`

,
  resume: `${process.env.PUBLIC_URL || ''}/Assets/Vignesh_Mohan_Resume_Feb_2026.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/vignesh-mohan-3701311a1',
    github: 'https://github.com/Viggi28',
  },
}

const experiences = [
  {
    title: 'Research Software Developer',
    dateRange: 'Mar 2025 — Present',
    company: 'Biodesign Institute, Arizona State University',
    location: 'Tempe, AZ',
    bullets: [
      'Architected an admin management platform using **Next.js**, **Express.js** and **PostgreSQL** to consolidate SharePoint workflows, reducing manual processing by 1.5x and approval turnaround by 60%.',
      'Integrated **JWT**-based authentication with **RBAC**, improving access-control compliance.',
      'Modernized a cron-based IoT pipeline to a real-time **MQTT** ingestion system, collecting data from 350+ lab freezers and reducing costs by **90%**.',
    ],
  },
  {
    title: 'Software Engineer - Full Stack',
    dateRange: 'Jul 2022 — Jul 2024',
    company: 'Standard Chartered Global Business Services',
    location: 'Chennai, India',
    bullets: [
      'Co-owned the development of an enterprise trade platform using React, Node.js, Spring Boot, Oracle DB, and JPA, handling **2M+** daily transactions. Integrated **OAuth2** and **Apigee** for load balancing and rate limiting.',
      '**Microservice Architecture:** Orchestrated migration from a legacy monolithic system to event‑driven microservices using Apache **Kafka**, reducing API response time by 45% and achieving sub‑100ms message latency.',
      '**Distributed Caching:** Designed a distributed caching service that serves as the primary market data for all trades across the system. Increased system throughput by 25% and reduced average query time by 35%.',
      '**Security & Sanitation:** Identified and remediated 150+ XSS, SQLI, etc. vulnerabilities using Checkmarx & SonarQube scans, improving code quality rating by 60%.',
    ],
  },
  {
    title: 'NLP Research Intern',
    dateRange: 'May 2021 — Jan. 2022',
    company: 'National Institute of Technology',
    location: 'Trichy, India',
    bullets: [
      'Enhanced OntoKIQE, an ontology-driven **query expansion** system, by integrating **Sentence-BERT (all-MiniLM-L6-v2)** embeddings for semantic term enrichment and leveraging **GPT-3.5-turbo** for dynamic ontology mapping, achieving a **18%** increase in **information retrieval** accuracy over traditional statistical baselines.',
      'Implemented a hybrid retrieval pipeline combining domain ontology expansion with **vector similarity search** using **FAISS indexing**, utilizing **WikiData API** and LLM-generated semantic relationships as the knowledge base, resulting in over **12%** increase in **precision**, **recall**, and **FDR** while reducing retrieval latency by **15%**.',
    ],
  },
  {
    title: 'Software Analyst Intern',
    dateRange: 'May 2021 — Jul 2021',
    company: 'Hexaware Technologies',
    location: 'Bangalore, India',
    bullets: [
      'Designed and implemented scalable REST APIs using **Vue.js** and **FastAPI** to streamline supply-chain integrations, improving data synchronization and end-to-end throughput by **20%**.',
      'Introduced and maintained **Swagger/OpenAPI** documentation to lower API integration errors by 15%.',
    ],
  },
]

const projects = [
  {
    name: 'Legal Document Discrepancy Detection',
    description:
      'A modular multi-agent system that detects inconsistencies and legal violations in legal documents using RAG and Chain-of-Thought reasoning.',
    stack: ['Python', 'LangGraph', 'LangChain', 'LLMs', 'RAG'],
    sourceCode: 'https://github.com/CodeZero-NLP/Legal-LM',
    image: LegalContractImage,
  },
  {
    name: 'DineSphere Chatbot',
    description:
      'A serverless dining recommendation concierge leveraging AWS services for event-driven queries and automated email notifications.',
    stack: [
      'AWS Lambda',
      'AWS Lex',
      'DynamoDB',
      'ElasticSearch',
      'AWS SQS',
      'AWS SES',
      'AWS S3',
    ],
    sourceCode: 'https://github.com/Viggi28/DineSphere',
    image: DiningConciergeImage,
  },
  {
    name: 'Interview Unlocked',
    description:
      'An interview preparation platform using a multi-agent LLM architecture to analyze resumes and job descriptions, generating personalized interview questions scraped from discussion groups.',
    stack: ['Next.js', 'LangGraph', 'LangChain', 'FAISS', 'Selenium', 'LLMs'],
    sourceCode: 'https://github.com/MandarB01/interview-unlocked',
    image: InterviewUnlockedImage,
  },
  {
    name: 'TCR Epitope Binding Affinity Prediction',
    description:
      'Supervised sequence modeling with catELMo and BERT for TCR–epitope binding prediction.',
    stack: ['Python', 'PyTorch', 'catELMo', 'BERT', 'LLM Inference'],
    sourceCode: 'https://github.com/Viggi28/Data-Selection-for-TCR-Epitope-Binding-Prediction',
    image: TcrEpitopeImage,
  },
  {
    name: 'Collab.IO',
    description:
      'A real-time collaborative whiteboard to brainstorm your next masterpiece.',
    stack: ['Next.js', 'JavaScript', 'Socket.IO', 'Tailwind CSS', 'Express.js'],
    sourceCode: 'https://github.com/Viggi28/collaboard2.0',
    livePreview: 'https://collaborative-whiteboard.vercel.app/',
    image: CollabIoImage,
  },
  // {
  //   name: 'Distributed Data Processing Pipeline',
  //   description:
  //     'A scalable Kafka and Neo4j pipeline enabling PageRank and BFS analytics on taxi trip data.',
  //   stack: ['Kafka', 'Neo4j', 'Docker', 'Kubernetes', 'Helm'],
  //   // sourceCode: 'https://github.com',
  //   // livePreview: 'https://github.com',
  //   image: 'cleanfolio.png',
  // },
  {
    name: 'DDoS Detection System',
    description:
      'A scalable machine learning system for detecting and mitigating DDoS attacks using a hybrid ensemble of Random Forest and CNN-based models.',
    stack: ['Python', 'Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/Viggi28/DDoS-Attack-Detection',
    // livePreview: 'https://github.com',
    image: DdosImage,
  },
]

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ]
  },
  {
    category: 'Web Frameworks',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
      { name: 'Solace', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Oracle DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Neo4j', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'RAG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'FAISS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Qdrant', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Agile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    ]
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'muroor21@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/vignesh-mohan-3701311a1',
    github: 'https://github.com/Viggi28',
  },
}

export { header, about, experiences, projects, skills, contact }
