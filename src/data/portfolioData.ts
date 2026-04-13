export const personalInfo = {
  name: "Ibrahim Al Ayoubi",
  firstName: "Ibrahim",
  lastName: "Al Ayoubi",
  title: "Data Scientist",
  subtitles: [
    "Machine Learning Specialist",
    "Computer Vision Researcher",
    "Deep Learning Engineer",
    "Data & AI Enthusiast",
  ],
  bio: "Data Scientist specializing in Machine Learning and Computer Vision, with applied research experience at INRIA and DVRC. I build and optimize deep learning models (CNNs, Vision Transformers) and end-to-end ML pipelines for real-world applications. Currently seeking a CIFRE thesis in applied AI for computer vision.",
  email: "ayoubi192003@gmail.com",
  phone: "06 68 92 47 70",
  github: "https://github.com/ibrayoubi10",
  linkedin: "https://linkedin.com/in/ibrahim-al-ayoubi",
  githubUsername: "ibrayoubi10",
  linkedinUsername: "ibrahim-al-ayoubi",
  location: "Montpellier, France",
  profileImage: "/profile.jpg",
  languages: [
    { name: "French", level: "C1", flag: "🇫🇷" },
    { name: "English", level: "C1", flag: "🇬🇧" },
    { name: "Arabic", level: "Native", flag: "🇸🇦" },
  ],
};

export const skills = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "R", icon: "📊" },
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🗄️" },
    { name: "C/C++", icon: "⚙️" },
    { name: "JavaScript", icon: "🌐" },
  ],
  dataAi: [
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "TensorFlow / Keras", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Transformers", icon: "🔮" },
    { name: "BERT", icon: "📝" },
    { name: "LLMs", icon: "💬" },
  ],
  dbBigData: [
    { name: "MySQL", icon: "🐬" },
    { name: "Oracle", icon: "🏛️" },
    { name: "NoSQL", icon: "📦" },
    { name: "Neo4j", icon: "🕸️" },
    { name: "CouchDB", icon: "🛋️" },
    { name: "Spark", icon: "⚡" },
    { name: "Hadoop", icon: "🐘" },
  ],
  tools: [
    { name: "Git / GitHub / GitLab", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Colab", icon: "☁️" },
    { name: "Jupyter", icon: "📓" },
    { name: "Linux / Windows / MacOS", icon: "🐧" },
    { name: "Power BI", icon: "📊" },
    { name: "CUDA / GPU Training", icon: "🖥️" },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Computer Vision & Deep Learning Intern",
    company: "DVRC – Léonard de Vinci",
    location: "La Défense, Paris",
    period: "January – July 2026",
    type: "Research Internship",
    technologies: ["Python", "PyTorch", "Computer Vision", "CUDA", "Git"],
    color: "blue",
    description: [
      "Development and optimization of medical image segmentation models (TransUNet, HiFormer, DeepLabV3+) for medical dataset analysis.",
      "Implementation and comparison of advanced augmentation strategies (Superpixels, HSMix, Boundary-Aware Mixing).",
      "Design of a complete training and evaluation pipeline with Dice, IoU, and HD95 metric tracking.",
      "Improved segmentation performance with a gain of +3 to +5% on Dice score vs. baseline.",
      "Writing a scientific paper in preparation for submission to an IEEE conference on augmentation methods for medical segmentation.",
    ],
  },
  {
    id: 2,
    role: "ML and KG Explainability Intern",
    company: "INRIA",
    location: "Montpellier",
    period: "June – July 2025",
    type: "Research Internship",
    technologies: ["Python", "Java", "SQL", "Integraal", "Prolog", "RDF", "Git"],
    color: "cyan",
    description: [
      "Design of an ontology and SQL-RDF mappings to improve integration and querying of data from ML models.",
      "Use of the InteGraal engine to model logical rules and explain the behavior of predictive models.",
      "Contribution to the RainFalls project (Brazil) for environmental and climate data analysis.",
    ],
  },
  {
    id: 3,
    role: "Data Scientist Intern",
    company: "DAS360",
    location: "Beirut",
    period: "August 2024",
    type: "Industry Internship",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Jupyter Notebook", "Power BI", "Git"],
    color: "indigo",
    description: [
      "Initiation to building predictive models for decision support.",
      "Observation of collaborative work: participation in meetings and discovery of team coordination tools.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Mini CLIP",
    subtitle: "Multimodal Image–Text Encoding",
    period: "2024–2025",
    description:
      "Implementation of a multimodal model inspired by CLIP for aligning images and text in a shared latent space. Achieved ~+15% improvement on cross-modal retrieval vs. a CNN baseline.",
    technologies: ["Python", "PyTorch", "CLIP", "Transformers", "Deep Learning"],
    highlights: [
      "+15% retrieval precision vs CNN baseline",
      "Cross-modal image-text retrieval",
      "Shared latent space architecture",
    ],
    color: "blue",
    icon: "🔮",
  },
  {
    id: 2,
    title: "Medical Segmentation Pipeline",
    subtitle: "TransUNet & HiFormer Optimization",
    period: "2026",
    description:
      "Full end-to-end pipeline for medical image segmentation using Vision Transformers. Benchmarked multiple architectures and augmentation strategies with comprehensive metrics.",
    technologies: ["Python", "PyTorch", "TransUNet", "HiFormer", "CUDA", "DeepLabV3+"],
    highlights: [
      "+3–5% Dice score improvement",
      "Dice, IoU, HD95 metric tracking",
      "IEEE paper in preparation",
    ],
    color: "cyan",
    icon: "🏥",
  },
  {
    id: 3,
    title: "RainFalls Climate Analysis",
    subtitle: "Environmental Data & KG Reasoning",
    period: "2025",
    description:
      "Contribution to the RainFalls project (Brazil) for environmental and climate data analysis using SQL-RDF ontologies and knowledge graph reasoning to explain ML models.",
    technologies: ["Python", "SQL", "RDF", "Prolog", "InteGraal", "Java"],
    highlights: [
      "SQL-RDF ontology design",
      "ML model explainability",
      "International research project",
    ],
    color: "indigo",
    icon: "🌧️",
  },
];

export const publications = [
  {
    id: 1,
    title:
      "Boundary-Aware Superpixel Mixing for Robust Medical Image Segmentation",
    venue: "IEEE Conference",
    year: "2026",
    status: "In Preparation",
    description:
      "This paper investigates advanced data augmentation strategies for medical image segmentation, introducing Boundary-Aware Superpixel Mixing (BSMix) to improve model robustness on challenging medical datasets.",
    topics: ["Medical Image Segmentation", "Data Augmentation", "Deep Learning", "Computer Vision"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Fundamentals of AI Agents Using RAG and LangChain",
    issuer: "IBM",
    date: "March 2026",
    status: "Completed",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Machine Learning Engineer Professional Certificate",
    issuer: "IBM",
    date: "In Progress",
    status: "In Progress",
    icon: "🎓",
  },
];

export const education = [
  {
    id: 1,
    degree: "Master's – Computer Science, AI & Data Science",
    institution: "UFR des Sciences de Montpellier",
    period: "2024 – 2026",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Double Bachelor's – Mathematics & Computer Science",
    institution: "UFR des Sciences de Montpellier",
    period: "2021 – 2024",
    icon: "📐",
  },
];
