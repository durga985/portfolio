export const techIcons: Record<string, string> = {
  "Python": "Snake",
  "Java": "Coffee",
  "C": "Code",
  "Ansible": "Cpu",
  "Shell Scripting": "Terminal",
  "Machine Learning": "Brain",
  "Deep Learning": "Brain",
  "NLP": "MessageSquare",
  "LLMs": "Brain",
  "PyTorch": "Zap",
  "TensorFlow": "Zap",
  "n8n": "Zap",
  "Prompt Engineering": "MessageSquare",
  "scikit-learn": "Brain",
  "pandas": "Database",
  "numpy": "Zap",
  "Azure": "Cloud",
  "AWS": "Cloud",
  "Google Cloud": "Cloud",
  "Terraform": "Layers",
  "SQL": "Database",
  "ORACLE": "Database",
  "MongoDB": "Database",
  
  "Power BI": "BarChart3",
  "Git": "GitBranch",
  "Gerrit": "GitBranch",
  "Jira": "CheckSquare",
  "Jenkins": "Boxes",
  "Docker": "Box",
  "RedHat Linux": "Terminal",
  "HTML": "Code",
  "CSS": "Palette",
  "JavaScript": "Zap",
  "Veritas NetBackup": "HardDrive",
};

export const profile = {
  "name": "Durga Phani Teja Pasupuleti",
  "location": "Binghamton, NY",
  "phone": "+1 (607) 595-9637",
  "email": "durgaphaniteja.binghamton@gmail.com",
  "linkedin": "phaniteja-pasupuleti",
  "headline": "Software Developer \u2022 M.S. Computer Science @ Binghamton (May 2026)",
  "summary": "M.S. Computer Science student (Expected May 2026) with 3+ years of industry experience as a Developer at TCS. I build AI-driven applications and automation-friendly systems using Python, AWS, and modern DevOps tooling.",
  "education": [
    {
      "school": "Binghamton University, State University of New York",
      "degree": "M.S. in Computer Science",
      "where": "Binghamton, NY",
      "when": "Expected May 2026",
      "coursework": [
        "Design and Analysis for Computer Algorithms",
        "Introduction to Artificial Intelligence",
        "Introduction to Data Mining",
        "Introduction to Machine Learning",
        "Database Systems",
        "Introduction to Cloud Computing"
      ]
    },
    {
      "school": "Velagapudi Ramakrishna Siddhartha Engineering College (SAHE/VRSEC)",
      "degree": "B.Tech in Information Technology",
      "where": "Vijayawada, India",
      "when": "Aug 2016 \u2013 Sep 2020",
      "coursework": [
        "Design and Analysis for Computer Algorithms",
        "Artificial Neural Networks",
        "Big Data",
        "R programming",
        "Database Systems",
        "Natural Language Processing"
      ]
    }
  ],
  "skills": {
    "Languages": [
      "Python",
      "Java",
      "C",
      "Ansible",
      "Shell Scripting"
    ],
    "ML & AI": [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "PyTorch",
      "TensorFlow",
      "Prompt Engineering",
      "scikit-learn",
      "pandas",
      "numpy"
    ],
    "Cloud & Data": [
      "Azure",
      "AWS",
      "Google Cloud",
      "Terraform",
      "SQL",
      "ORACLE",
      "MongoDB",
      
      "Power BI"
    ],
    "DevOps & Tools": [
      "Git",
      "Gerrit",
      "Jira",
      "Jenkins",
      "Docker",
      "Veritas NetBackup"
    ],
    "Web & Other": [
      "RedHat Linux",
      "HTML",
      "CSS",
      "JavaScript",
      "n8n"
    ]
  },
  "experience": [
    {
      "company": "Tata Consultancy Services (TCS)",
      "title": "Developer",
      "where": "Hyderabad, Telangana",
      "when": "Jan 2021 \u2013 Jun 2024",
      "bullets": [
        "Developed and tested code by analyzing requirements to ensure accurate and efficient results.",
        "Troubleshot and resolved complex technical issues across multiple software releases.",
        "Designed and managed solutions for technical challenges while handling multiple issues simultaneously.",
        "Implemented quality control procedures to enhance system efficiency and reliability."
      ]
    },
    {
      "company": "Arete IT Services",
      "title": "Developer Intern",
      "where": "Vijayawada, Andhra Pradesh",
      "when": "Apr 2019 \u2013 Jun 2019",
      "bullets": [
        "Developed code to retrieve and process facial data from storage, enhancing system functionality.",
        "Debugged and optimized code to improve performance and ensure system efficiency.",
        "Collaborated with clients and team members to communicate project status and resolve issues.",
        "Researched and evaluated emerging facial recognition technologies to identify potential enhancements."
      ]
    }
  ],
  "projects": [
    {
      "slug": "personal-portfolio-website",
      "name": "Personal Portfolio Website",
      "tagline": "Next.js · TypeScript · Tailwind CSS · Static Export",
      "image": "/projects/portfolio-website.svg",
      "stack": [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React"
      ],
      "highlights": [
        "Designed and developed a responsive personal portfolio to showcase projects, skills, and professional experience.",
        "Implemented dynamic project pages and filtering with a clean, modern UI using reusable React components.",
        "Configured static export and deployment-ready build pipeline for fast performance and easy hosting."
      ],
      "links": {
        "github": "https://github.com/durga985/portfolio.git",
        "demo": "",
        "writeup": ""
      }
    },
    {
      "slug": "optimized-rag-enterprise-knowledge",
      "name": "Optimized Retrieval-Augmented Generation (RAG) System for Enterprise Knowledge Bases",
      "tagline": "Python · FAISS · LlamaIndex · HuggingFace · Sentence-Transformers · Cross-Encoder Reranking · Streamlit",
      "image": "/projects/rag-system.svg",
      "stack": [
        "Python",
        "FAISS",
        "LlamaIndex",
        "HuggingFace",
        "Sentence-Transformers",
        "Cross-Encoder Reranking",
        "Streamlit"
      ],
      "highlights": [
        "Built an end-to-end RAG pipeline over 6,000+ documents, enabling grounded enterprise QA with citation support.",
        "Conducted embedding and retrieval ablations (MiniLM, BGE, E5, chunking, depth), improving answer accuracy by 10%.",
        "Reduced hallucination by 15% via hybrid retrieval and cross-encoder reranking while maintaining 1.6s p95 latency; implemented evaluation framework measuring Recall@k, MRR, and grounded accuracy."
      ],
      "links": {
        "github": "",
        "demo": "",
        "writeup": ""
      }
    },
    {
      "slug": "ai-job-analyzer",
      "name": "AI-Job-Analyzer",
      "tagline": "AI-Powered Resume Screening & Job Intelligence Platform",
      "image": "/projects/ai-job-analyzer.svg",
      "stack": [
        "Python",
        "Sentence-BERT",
        "Transformers",
        "AWS EC2",
        "Terraform",
        "Streamlit",
        "Playwright"
      ],
      "highlights": [
        "Designed and deployed an end-to-end NLP system to compute semantic similarity between resumes and job descriptions using Sentence-BERT embeddings.",
        "Built real-time job scraping pipelines with Playwright to dynamically match candidate profiles to live job postings.",
        "Provisioned and deployed scalable cloud infrastructure on AWS EC2 using Terraform and load balancing for fault tolerance.",
        "Implemented keyword gap analysis to identify missing technical skills and enhance resume-job alignment."
      ],
      "links": {
        "github": "https://github.com/durga985/AI-Job-analyzer",
        "demo": "",
        "writeup": ""
      }
    },
    {
      "slug": "topic-modeling-text-mining",
      "name": "Topic Modeling using Deep Learning through Text Mining",
      "tagline": "Python · NLP · Deep Learning",
      "image": "/projects/topic-modeling.svg",
      "stack": [
        "Python",
        "NLP",
        "Deep Learning"
      ],
      "highlights": [
        "Implemented topic modelling on large-scale unstructured text data to extract meaningful document clusters.",
        "Applied deep learning-based text embeddings to improve semantic grouping and topic coherence.",
        "Performed exploratory data analysis and model evaluation to validate interpretability and clustering performance."
      ],
      "links": {
        "github": "",
        "demo": "",
        "writeup": ""
      }
    },
    {
      "slug": "automatic-door-access-face-recognition",
      "name": "Automatic Door Access Using Facial Recognition",
      "tagline": "Python · OpenCV · NumPy",
      "image": "/projects/face-access.svg",
      "stack": [
        "Python",
        "OpenCV",
        "NumPy"
      ],
      "highlights": [
        "Developed a facial recognition pipeline for secure access control using image preprocessing and feature extraction.",
        "Optimized image processing workflows to enhance recognition performance and system efficiency.",
        "Evaluated facial recognition algorithms and improved model robustness through iterative testing."
      ],
      "links": {
        "github": "",
        "demo": "",
        "writeup": ""
      }
    },
    {
      "slug": "data-collection-system-seeker",
      "name": "Data Collection System - Seeker",
      "tagline": "Data Collection · Workflow Automation · System Design",
      "image": "/projects/data-collection-seeker.svg",
      "stack": [
        "Python",
        "Automation",
        "Data Engineering"
      ],
      "highlights": [
        "Built a structured data collection workflow to gather and organize source data for downstream processing.",
        "Focused on reliability and repeatability with clear collection stages and maintainable project structure.",
        "Repository: https://github.com/2025-Fall-CS-515/data-collection-system-seeker.git"
      ],
      "links": {
        "github": "https://github.com/2025-Fall-CS-515/data-collection-system-seeker.git",
        "demo": "",
        "writeup": ""
      }
    }
  ],
  "certifications": [
    "AWS Certified Cloud Practitioner (CLF-C02)",
    "IBM BigInsights (IBM)"
  ],
  "achievements": [
    "Best Major Project \u2014 VR Siddhartha College competition (Vijayawada).",
    "Organized events under CSI and ACM student chapters.",
    "Multiple on-the-spot awards at TCS for successfully handling client requirements.",
    "Best Poster Award (3-member team) under Prof. Yiming Zeng at Binghamton University."
  ]
} as const;
export type Profile = typeof profile;
