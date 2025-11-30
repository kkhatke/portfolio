// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Karan Khatke",
  title: "Sr. Data Scientist & Engineer",
  tagline: "Building scalable data pipelines and deriving insights from complex datasets. Specialized in ETL, cloud infrastructure, and machine learning.",
  location: "Indore, India",
  email: "karan.khatke@gmail.com",
  phone: "+91 9179447005",
  phone2: "+91 7987997278",
  linkedin: "https://linkedin.com/in/karan-khatke",
  github: "https://github.com/karankhatke",
  resumeFile: "./resume.pdf", // Place your resume PDF in the same folder
  education: [
    "M.Tech. Thermal Engineering, LNCT Indore (GPA: 8.21/10)",
    "B.E. Mechanical Engineering, VITS Indore (GPA: 7.86/10)"
  ]
};

// ============================================
// ABOUT ME
// ============================================
export const aboutMe = {
  paragraphs: [
    "Data scientist and engineer with expertise in building production-grade ETL pipelines and cloud-based data infrastructure. Currently working at ISB's Bharti Institute of Public Policy, where I develop scalable solutions for processing government datasets.",
    "I specialize in automating data workflows, optimizing pipeline performance, and creating data-driven insights through advanced analytics and visualization. With a strong foundation in mechanical engineering and over 8 years of teaching experience, I bring a unique blend of technical expertise and communication skills to data science projects."
  ]
};

// ============================================
// SKILLS
// ============================================
export const skills = {
  "Data Engineering": ["ETL Pipelines", "Data Warehousing", "Mage AI", "Kestra"],
  "Programming": ["Python", "SQL", "PostgreSQL", "MySQL"],
  "Cloud & Tools": ["OCI", "GCP", "BigQuery", "Terraform"],
  "Analytics": ["Tableau", "Looker", "Advanced SQL", "dbt"],
  "ML & AI": ["Scikit-learn", "NLP", "LLM", "Transformers"]
};

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences = [
  {
    title: "Sr. Data Scientist",
    company: "Bharti Institute of Public Policy, ISB",
    period: "Jan 2024 - Present",
    location: "Mohali, India",
    highlights: [
      "Built and optimized ETL pipelines using Mage AI, automating data ingestion from multiple sources for IDP (India Data Portal)",
      "Managed cloud-based infrastructure on Oracle Cloud (OCI), ensuring scalability and resource efficiency for high-volume data processing",
      "Developed and maintained data integration workflows between CKAN and internal databases, improving data ingestion speed by 40%",
      "Implemented pipeline performance optimizations, reducing data processing time by 30% and improving query execution speed"
    ]
  },
  {
    title: "Research Associate",
    company: "Bharti Institute of Public Policy, ISB",
    period: "Feb 2023 - Dec 2024",
    location: "Mohali, India",
    highlights: [
      "Designed, built, and maintained ETL pipelines to process large-scale government datasets, ensuring efficient data ingestion and transformation",
      "Automated data validation and cleansing workflows, reducing inconsistencies in structured and unstructured data across platforms",
      "Developed static and animated graphics to visually represent insights derived from the data, effectively communicating key findings and trends to stakeholders",
      "Collaborated with data engineers to implement data quality validation methods, ensuring structured and accurate datasets on the Himachal Data Portal and Meghalaya Data Portal",
      "Stayed updated with emerging trends in data visualization and employed innovative approaches to present complex data"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Amulyam Digital Media Pvt. Ltd.",
    period: "July 2022 - Dec 2022",
    location: "Indore, India",
    highlights: [
      "Analyzed and monitored data-driven campaigns and performance metrics to identify trends and insights",
      "Developed and maintained dashboards and reporting to track KPIs",
      "Integrated REST APIs to automate data ingestion, reducing manual data collection efforts by 30%",
      "Created and optimized SQL queries for data retrieval, ensuring fast and reliable access to analytics reports"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Trendy Dice",
    period: "Jan 2022 - June 2022",
    highlights: [
      "Integrated real-time data updates for sales tracking using Google Data Studio",
      "Implemented anomaly detection in order deliveries, preventing 20% of errors in logistics reporting",
      "Designed and managed data validation checks to detect anomalies in order deliveries, improving reporting accuracy",
      "Built an email reminder for the team whenever the delivery time is delayed over 7 days so that escalation can be done",
      "Created weekly reports on Product transactions with respect to products being sold",
      "Segmented users using RFM methodology for planning customer engagement activity to increase user retention"
    ]
  },
  {
    title: "Assistant Professor",
    company: "PIEMR, Indore",
    period: "Jan 2015 - Feb 2023",
    location: "Indore, India",
    highlights: [
      "Analyzed attendance and results to help students grow and perform well",
      "Conveyed subject matter and lectures to students in a creative way",
      "Ensured completion of assigned syllabus within the time frame given",
      "Analyzed previous session data for continuous improvement and NBA accreditation",
      "Analyzed and regulated academic data as per guidelines of governing bodies like AICTE, UGC, and accreditation bodies like NBA, NAAC"
    ]
  },
  {
    title: "Design Consultant",
    company: "Freelancer",
    period: "Jan 2014 - Feb 2023",
    highlights: [
      "Conducted legacy conversions - 3D Solid Modeling, Surfacing & Drawing Conversion, and Data Migration",
      "Performed Parametric and Non-Parametric Modeling of Components",
      "Checked the behavior of components on CAE software",
      "Reviewed Engineering/design changes and resolved quality-related problems associated with the design"
    ]
  }
];

// ============================================
// CERTIFICATIONS
// ============================================
export const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    period: "Oct 2024 - Feb 2025",
    details: "Courses: Large Language Models (LLMs), Transformer Architecture, Gen AI Life Cycle, Scaling Laws, Model Training",
    highlights: "20+ hrs coursework, 3 graded assignments"
  },
  {
    title: "Data Engineering Bootcamp",
    issuer: "DataExpert.io",
    period: "Nov 2024 - Feb 2025",
    details: "Courses: Data Modelling, Fact Modelling, Apache Spark, Flink and Kafka, Real-Time Data Processing, Advanced SQL and Analytics, Pipeline Maintenance, KPIs and A/B Testing, Unit Testing PySpark",
    highlights: "40+ hrs of coursework, 8 assignments"
  },
  {
    title: "Data Analytics Bootcamp",
    issuer: "OneLearn.io",
    period: "Apr 2022 - Jun 2022",
    details: "Courses: Python Programming, Data Analysis & Visualization, SQL & Analytics, Dashboarding and Deployment, Tableau",
    highlights: "600+ hrs of coursework, 10 coding assignments, 3 projects (Python, EDA, Pandas, SQL)"
  }
];

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    title: "India Vehicle Fuel Transition Forecasting Model",
    category: "Running Projects",
    tags: ["Time Series", "ARIMA", "Prophet", "Forecasting", "VAHAN Data", "Policy Analytics"],
    description: "Building a comprehensive forecasting model to analyze and predict India's transition from fossil fuel vehicles to EVs and alternative fuels. Working with VAHAN vehicle registration datasets across fuel types, vehicle classes, and manufacturers. Developing predictive models to forecast scenarios where non-renewable fuel vehicle registrations reduce by 25% over the next 5-10 years. Creating data integration pipelines to infer manufacturer-fuel relationships and performing state-wise, RTO-level trend analysis. The project aims to provide data-driven policy recommendations and infrastructure gap analysis for India's sustainable transport transition.",
    link: "#",
    status: "running"
  },
  {
    title: "PIB RAG System - Government Policy Q&A Assistant",
    category: "Running Projects",
    tags: ["LLM", "RAG", "Vector DB", "HuggingFace", "Langchain", "FAISS", "Streamlit"],
    description: "Developing an advanced Retrieval Augmented Generation (RAG) system using scraped PIB (Press Information Bureau) articles in JSON format. Building a semantic search engine with vector embeddings to enable intelligent Q&A about Indian government policies, announcements, and ministerial activities. Implementing vector database (FAISS/Chroma) for efficient retrieval, LLM integration for natural language responses, and features like ministry-specific searches, timeline-based queries, and source citations. The system will serve as an AI-powered assistant for policy researchers, journalists, and citizens to access government information through conversational queries.",
    link: "#",
    status: "running"
  },
  {
    title: "Fuel & Fleet Trends – India's EV Transition",
    category: "Data Engineering",
    tags: ["GCP", "GCS", "Kestra", "Terraform", "BigQuery", "dbt", "Looker Studio"],
    description: "Developed an end-to-end data pipeline to monitor and visualize the adoption of electric vehicles (EVs) in India. Implemented web scraping to collect vehicle registration data across various fuel types and categories. Utilized dbt for data transformation and modeling, and Kestra for orchestrating workflows. Deployed infrastructure using Terraform on GCP, ensuring scalability and reliability. Created dashboards to provide insights into EV trends, aiding stakeholders in understanding the transition dynamics.",
    link: "https://github.com/karankhatke",
    status: "completed"
  },
  {
    title: "NLP Text Analytics & Sentiment Engine",
    category: "Machine Learning",
    tags: ["Python", "NLTK", "Scikit-Learn", "BeautifulSoup", "WordCloud", "Pandas"],
    description: "Built a full NLP pipeline to scrape, clean, and analyze 113+ articles, generating sentiment, readability, and linguistic metrics. Implemented lexicon-based sentiment scoring, readability models (Fog Index, complex words), and TF-IDF-based topic extraction. Applied clustering (K-Means) for article grouping and created comprehensive visual reports including sentiment distribution, correlation matrix, and word clouds. Delivered a production-style pipeline generating structured Excel outputs and automated HTML insights reports.",
    link: "https://github.com/karankhatke",
    status: "completed"
  },
  {
    title: "LGD Mapping Application",
    category: "Data Engineering",
    tags: ["Python", "RapidFuzz", "Pandas", "CLI Automation", "Logging", "Data Validation"],
    description: "Built a hierarchical entity-matching engine using name normalization, exact UID matching, and fuzzy ML similarity scoring (95%/90%) to reconcile district–block–village data with LGD (Local Government Directory) codes. Automated multi-level mapping (3–5 levels), parent-aware matching, and chunked large-scale processing with comprehensive logs and quality reports. Added full data quality validation, error handling, duplicate detection, and chunk processing for large datasets, ensuring reliability for government-scale data volumes. Implemented comprehensive summary reports, detailed logs, and quality metrics for auditability and debugging.",
    link: "https://github.com/karankhatke",
    status: "completed"
  },
  {
    title: "Movie Analytics Dashboard",
    category: "Analytics",
    tags: ["Pandas", "Python", "Matplotlib", "Seaborn", "Plotly", "Dash"],
    description: "Exploratory Data Analysis and Visualization with deployment of an interactive dashboard of Movie Analytics. Worked with a dataset of 85,855 movies of the IMDB rating system and 17,712 movies of the Tomato meter rating system. Through EDA and visualization, drew vital insights that the Animation genre movies have the highest earning potential and higher ratings in both rating systems.",
    link: "#",
    status: "completed"
  },
  {
    title: "NYC Yellow Taxi Analysis",
    category: "Analytics",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    description: "Exploratory Data Analysis and Visualization of New York Yellow Taxi Dataset to see the impact of the pandemic on the yellow taxi business in New York. Worked with 6.2M trip records (pre-pandemic) and 0.5M records (post-pandemic). One of the clear insights: the number of trips in June 2020 was reduced by around 93% compared to February 2020.",
    link: "https://github.com/karankhatke",
    status: "completed"
  },
  {
    title: "Video Game Data Analytics",
    category: "Data Engineering",
    tags: ["PostgreSQL", "Python", "Pandas", "Jupyter Notebook", "ETL", "SQLAlchemy"],
    description: "A real-time videogame dataset obtained from vgchartz.com using ETL techniques. Developed SQL scripts to create tables in PostgreSQL in accordance with the ERD diagram's structure. Used Psycopg2-binary and SQLAlchemy to connect to PostgreSQL from Jupyter notebook.",
    link: "https://github.com/karankhatke",
    status: "completed"
  },
  {
    title: "Email Automation System",
    category: "Automation",
    tags: ["Python", "Smtplib", "VS Code", "Windows Task Scheduler"],
    description: "Created an email reminder program for course series that sends automated reminder emails to students before class day. Built using Python script with Smtplib library. Automation carried out through Windows Task Scheduler for scheduled execution.",
    link: "https://github.com/karankhatke",
    status: "completed"
  }
];

// ============================================
// PROJECT CATEGORIES
// ============================================
export const categories = [
  'all', 
  'Running Projects', 
  'Data Engineering', 
  'Machine Learning', 
  'Analytics', 
  'Automation'
];