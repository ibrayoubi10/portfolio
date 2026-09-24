// Edit these entries to personalize the portfolio.
// Main sources: the supplied resume and S2GIM manuscript excerpt. Mini CLIP, DAS360 and the earlier manuscript are retained from the original portfolio.

export const personalInfo = {
  "name": "Ibrahim Al Ayoubi",
  "firstName": "Ibrahim",
  "lastName": "Al Ayoubi",
  "title": "AI Engineer",
  "subtitles": [
    "Computer Vision Engineer",
    "Machine Learning Engineer",
    "Deep Learning & Multimodal AI",
    "RAG & Applied AI"
  ],
  "bio": "I build machine learning systems from data preparation through training, evaluation and deployment. My background combines applied computer vision research with the engineering of retrieval systems and data pipelines.",
  "email": "ayoubi192003@gmail.com",
  "phone": "+33 6 68 92 47 70",
  "github": "https://github.com/ibrayoubi10",
  "linkedin": "https://linkedin.com/in/ibrahim-al-ayoubi",
  "githubUsername": "ibrayoubi10",
  "linkedinUsername": "ibrahim-al-ayoubi",
  "location": "Montpellier, France",
  "profileImage": "/profile.jpg",
  "languages": [
    {
      "name": "French",
      "level": "C1",
      "flag": "🇫🇷"
    },
    {
      "name": "English",
      "level": "C1",
      "flag": "🇬🇧"
    },
    {
      "name": "Arabic",
      "level": "C2",
      "flag": "🇸🇦"
    }
  ],
  "phoneHref": "+33668924770",
  "availability": "Available for full-time AI engineering roles"
};

export const skills = {
  "languages": [
    {
      "name": "Python",
      "icon": "🐍"
    },
    {
      "name": "R",
      "icon": "📈"
    },
    {
      "name": "Java",
      "icon": "☕"
    },
    {
      "name": "SQL",
      "icon": "🗃️"
    },
    {
      "name": "C/C++",
      "icon": "⚙️"
    },
    {
      "name": "JavaScript",
      "icon": "🌐"
    }
  ],
  "dataAi": [
    {
      "name": "NumPy",
      "icon": "🔢"
    },
    {
      "name": "Pandas",
      "icon": "🐼"
    },
    {
      "name": "Scikit-learn",
      "icon": "🤖"
    },
    {
      "name": "TensorFlow / Keras",
      "icon": "🧠"
    },
    {
      "name": "PyTorch",
      "icon": "🔥"
    },
    {
      "name": "Transformers",
      "icon": "🔄"
    },
    {
      "name": "BERT",
      "icon": "📖"
    },
    {
      "name": "LLMs",
      "icon": "💬"
    },
    {
      "name": "OpenCV",
      "icon": "👁️"
    },
    {
      "name": "XGBoost",
      "icon": "🌳"
    },
    {
      "name": "CNNs",
      "icon": "🖼️"
    },
    {
      "name": "Vision Transformers",
      "icon": "🔍"
    },
    {
      "name": "DINOv2",
      "icon": "🦖"
    },
    {
      "name": "Self-supervised learning",
      "icon": "🪞"
    },
    {
      "name": "Data augmentation",
      "icon": "🎨"
    },
    {
      "name": "Dice / IoU / HD95",
      "icon": "📏"
    },
    {
      "name": "RAG",
      "icon": "📚"
    },
    {
      "name": "NLP",
      "icon": "🗣️"
    },
    {
      "name": "Embeddings",
      "icon": "🧭"
    },
    {
      "name": "Feature engineering",
      "icon": "🛠️"
    },
    {
      "name": "LangChain fundamentals",
      "icon": "🔗"
    }
  ],
  "dbBigData": [
    {
      "name": "MySQL",
      "icon": "🐬"
    },
    {
      "name": "Oracle",
      "icon": "🏛️"
    },
    {
      "name": "NoSQL",
      "icon": "📦"
    },
    {
      "name": "Neo4j",
      "icon": "🕸️"
    },
    {
      "name": "CouchDB",
      "icon": "🛋️"
    },
    {
      "name": "Spark",
      "icon": "⚡"
    },
    {
      "name": "Hadoop",
      "icon": "🐘"
    },
    {
      "name": "PostgreSQL",
      "icon": "🐘"
    },
    {
      "name": "Qdrant",
      "icon": "🎯"
    },
    {
      "name": "ChromaDB",
      "icon": "🌈"
    },
    {
      "name": "ETL pipelines",
      "icon": "🚰"
    },
    {
      "name": "RDF",
      "icon": "🧩"
    },
    {
      "name": "InteGraal",
      "icon": "🧮"
    },
    {
      "name": "Datalog±",
      "icon": "📜"
    }
  ],
  "tools": [
    {
      "name": "Git / GitHub / GitLab",
      "icon": "🌿"
    },
    {
      "name": "VS Code",
      "icon": "💻"
    },
    {
      "name": "Colab",
      "icon": "☁️"
    },
    {
      "name": "Jupyter",
      "icon": "📓"
    },
    {
      "name": "Linux / Windows / MacOS",
      "icon": "🖥️"
    },
    {
      "name": "Power BI",
      "icon": "📊"
    },
    {
      "name": "CUDA / GPU Training",
      "icon": "🚀"
    },
    {
      "name": "FastAPI",
      "icon": "⚡"
    },
    {
      "name": "REST APIs",
      "icon": "🔌"
    },
    {
      "name": "Docker",
      "icon": "🐳"
    },
    {
      "name": "Streamlit",
      "icon": "🎈"
    }
  ]
};

export const experiences = [
  {
    "id": 1,
    "company": "ESILV / DVRC",
    "location": "La Défense, France",
    "period": "January – July 2026",
    "role": "Machine Learning / Computer Vision Engineer",
    "type": "Research internship",
    "description": [
      "Designed and benchmarked DINOv2-based U-Net, TransUNet and DeepLabV3+ for medical image segmentation.",
      "Built the full pipeline: preprocessing, training, validation, checkpointing, inference and evaluation with Dice, IoU and HD95.",
      "Evaluated advanced data augmentation strategies to improve robustness and reduce overfitting. The segmentation pipeline achieved an absolute Dice improvement of 3–5 percentage points over the baseline."
    ],
    "technologies": [
      "PyTorch",
      "OpenCV",
      "DINOv2",
      "CUDA",
      "Computer vision"
    ],
    "color": "blue"
  },
  {
    "id": 2,
    "company": "Inria",
    "location": "Montpellier, France",
    "period": "June – July 2025",
    "role": "Machine Learning & Knowledge Graph Engineer",
    "type": "Research internship",
    "description": [
      "Engineered an ETL pipeline ingesting several million weather records for a precipitation-forecasting workflow.",
      "Designed an ontology and SQL–RDF mappings to unify heterogeneous relational sources into a knowledge graph.",
      "Implemented existential rules in InteGraal for ontology-based reasoning and forward-chaining inference."
    ],
    "technologies": [
      "Python",
      "SQL",
      "RDF",
      "InteGraal",
      "Datalog±",
      "Java"
    ],
    "color": "cyan"
  },
  {
    "id": 3,
    "company": "DAS360",
    "location": "Beirut, Lebanon",
    "period": "August 2024",
    "role": "Data Scientist Intern",
    "type": "Industry internship",
    "description": [
      "Explored predictive modeling for decision support and participated in collaborative data science workflows."
    ],
    "technologies": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Power BI"
    ],
    "color": "indigo"
  }
];

export const projects = [
  {
    "id": "segmentation",
    "title": "Medical image segmentation",
    "category": "Computer vision",
    "period": "2026",
    "context": "ESILV / DVRC research",
    "metric": "+3–5 pp",
    "metricLabel": "Absolute Dice improvement over baseline",
    "visualLabel": "PIXEL-LEVEL PREDICTION",
    "visualFooter": [
      "Dice",
      "IoU",
      "HD95"
    ],
    "description": "Benchmarking CNN, Transformer and self-supervised architectures to improve pixel-level predictions in medical images.",
    "technologies": [
      "PyTorch",
      "DINOv2",
      "TransUNet",
      "DeepLabV3+",
      "OpenCV"
    ],
    "approach": "Implemented DINOv2-based U-Net, TransUNet and DeepLabV3+ in an end-to-end pipeline, from preprocessing and augmentation to checkpointing and inference. Compared region overlap and boundary accuracy using Dice, IoU and HD95, with advanced augmentation strategies to improve robustness and reduce overfitting.",
    "outcome": "The segmentation pipeline achieved a 3–5 percentage-point absolute Dice improvement versus the baseline model.",
    "subtitle": "CNN, Transformer & Self-supervised Models",
    "color": "cyan",
    "icon": "🏥",
    "highlights": [
      "+3–5 percentage points in Dice vs baseline",
      "Dice, IoU and HD95 model comparison",
      "End-to-end training and inference pipeline"
    ]
  },
  {
    "id": "medical-rag",
    "title": "A research library you can query",
    "category": "RAG & AI engineering",
    "period": "August 2026",
    "context": "Personal project",
    "metric": "3,500+",
    "metricLabel": "Medical segmentation papers in the retrieval corpus",
    "visualLabel": "MEDICAL RESEARCH / RAG",
    "visualFooter": [
      "Ingest",
      "Embed",
      "Retrieve",
      "Generate"
    ],
    "description": "An end-to-end retrieval-augmented generation system that connects a medical imaging paper collection to an LLM through a FastAPI backend.",
    "technologies": [
      "FastAPI",
      "Qdrant",
      "PostgreSQL",
      "Docker",
      "LLMs"
    ],
    "approach": "Built automated arXiv retrieval, PDF parsing, chunking, embedding generation, deduplication and vector indexing in Qdrant. A REST API orchestrates retrieval, LLM generation and metadata management.",
    "outcome": "Containerized the API, vector database and relational database as separate Docker services for reproducible deployment and persistent storage.",
    "subtitle": "RAG for Medical Imaging Research",
    "color": "blue",
    "icon": "📚",
    "highlights": [
      "3,500+ scientific papers",
      "Automated ingestion and vector indexing",
      "FastAPI and Docker-based deployment"
    ]
  },
  {
    "id": "rainfalls",
    "title": "Climate data, connected",
    "category": "Data & knowledge graphs",
    "period": "2025",
    "context": "Inria · RainFalls",
    "metric": "Millions",
    "metricLabel": "Weather records ingested through an ETL pipeline",
    "visualLabel": "RELATIONAL DATA → KNOWLEDGE",
    "visualFooter": [
      "SQL",
      "RDF",
      "Rules",
      "Inference"
    ],
    "description": "A data pipeline and knowledge graph workflow for precipitation forecasting, connecting heterogeneous weather records with logical reasoning.",
    "technologies": [
      "Python",
      "SQL",
      "RDF",
      "InteGraal",
      "Datalog±"
    ],
    "approach": "Designed the domain ontology and declarative SQL–RDF mappings, then used existential rules and forward-chaining inference in InteGraal to reason over the integrated data.",
    "outcome": "Unified heterogeneous relational sources and ingested several million weather records to support the forecasting workflow.",
    "subtitle": "Weather Data & Knowledge Graph Reasoning",
    "color": "indigo",
    "icon": "🌧️",
    "highlights": [
      "Several million weather records",
      "SQL–RDF ontology and data integration",
      "Existential rules and forward-chaining inference"
    ]
  },
  {
    "id": "mini-clip",
    "title": "Mini CLIP",
    "category": "Multimodal learning",
    "period": "2024–2025",
    "context": "Image–text retrieval project",
    "metric": "Image ↔ text",
    "metricLabel": "Two modalities, one shared representation",
    "visualLabel": "CROSS-MODAL RETRIEVAL",
    "visualFooter": [
      "Images",
      "Text",
      "Shared latent space"
    ],
    "description": "A CLIP-inspired multimodal model that aligns images and text in a shared latent space for cross-modal retrieval.",
    "technologies": [
      "Python",
      "PyTorch",
      "CLIP",
      "Transformers"
    ],
    "approach": "Implemented image and text encoding into a shared latent space and compared cross-modal retrieval with a CNN baseline.",
    "outcome": "Achieved approximately 15% higher retrieval precision than the CNN baseline in the project evaluation.",
    "subtitle": "Multimodal Image–Text Encoding",
    "color": "blue",
    "icon": "🔮",
    "highlights": [
      "~15% retrieval precision gain vs CNN baseline",
      "Cross-modal image–text retrieval",
      "Shared latent space architecture"
    ]
  }
];

export type Publication = {
  id: number;
  title: string;
  venue: string;
  status: string;
  year: string;
  description: string;
  topics: string[];
  submittedDate?: string;
  authors?: { name: string; affiliations: number[]; marker?: string }[];
  affiliations?: { id: number; name: string }[];
  highlights?: { icon: string; title: string; description: string }[];
  abstract?: string[];
};

export const publications: Publication[] = [
  {
    "id": 2,
    "title": "S2GIM: Superpixel- and Saliency-Guided Image Mixing Data Augmentation for Medical Image Segmentation",
    "venue": "Elsevier",
    "status": "Preprint submitted",
    "year": "2026",
    "submittedDate": "September 24, 2026",
    "authors": [
      {
        "name": "N. Kozah",
        "affiliations": [
          1,
          4
        ]
      },
      {
        "name": "F. Dornaika",
        "affiliations": [
          1,
          2
        ],
        "marker": "*"
      },
      {
        "name": "I. Al Ayoubi",
        "affiliations": [
          3
        ]
      },
      {
        "name": "J. Charafeddine",
        "affiliations": [
          3
        ]
      },
      {
        "name": "F. Davoine",
        "affiliations": [
          5
        ]
      }
    ],
    "affiliations": [
      {
        "id": 1,
        "name": "University of the Basque Country UPV/EHU, San Sebastian, Spain"
      },
      {
        "id": 2,
        "name": "IKERBASQUE, Basque Foundation for Science, Bilbao, Spain"
      },
      {
        "id": 3,
        "name": "De Vinci Higher Education, De Vinci Research Center, Paris, France"
      },
      {
        "id": 4,
        "name": "Lebanese International University LIU, Beirut, Lebanon"
      },
      {
        "id": 5,
        "name": "LIRIS-UMR 5205, CNRS, INSA Lyon, France"
      }
    ],
    "description": "S2GIM combines superpixel regions and saliency-guided mixing to generate augmented medical images and matching segmentation masks while preserving anatomical contours and salient structures. Experiments on four datasets with convolutional and transformer-based models report improved segmentation accuracy over the compared augmentation methods and lower boundary errors in most cases.",
    "highlights": [
      {
        "icon": "🧩",
        "title": "Superpixel structure",
        "description": "Stochastic masks from two source images preserve local region boundaries."
      },
      {
        "icon": "🎯",
        "title": "Saliency guidance",
        "description": "Region-level mixing weights average saliency values within homogeneous superpixels."
      },
      {
        "icon": "🔬",
        "title": "Unified augmentation",
        "description": "A four-case pixel-wise strategy combines hard and soft mixing in one model-independent process."
      }
    ],
    "abstract": [
      "Deep learning-based medical image segmentation often suffers from limited annotated data, leading to overfitting and reduced generalization performance. Data augmentation is an effective strategy for mitigating this problem by increasing the diversity of training samples. Traditional local image editing methods, such as Mixup and CutMix, generate augmented samples using global interpolation or rectangular region replacement, which may destroy anatomical boundaries and important local structures. More recent superpixel-based approaches preserve contour information but do not fully exploit saliency information within a unified augmentation framework.",
      "To address these limitations, we propose Superpixel- and Saliency-Guided Image Mixing (S2GIM), a novel data augmentation method for medical image segmentation. S2GIM first generates stochastic superpixel masks from two source images and computes saliency-guided region-level mixing coefficients by averaging saliency values within homogeneous superpixel regions. A unified four-case pixel-wise mixing strategy is then applied to produce a single semantically consistent augmented image and its corresponding segmentation mask. Unlike previous methods that separately perform hard and soft mixing, S2GIM simultaneously preserves contour and salient information within one augmentation process.",
      "Extensive experiments conducted on four medical image segmentation datasets, namely ISIC 2017 Task 1, GlaS, MoNuSeg, and Synapse, using both convolutional and transformer-based architectures, demonstrate the effectiveness and generality of the proposed approach. Compared with existing augmentation methods, including Mixup, CutMix, LCAMix, and HSMix, S2GIM improves segmentation accuracy and, in the majority of cases, reduces boundary errors. The proposed method is model-independent, easy to implement, and can be readily integrated into existing medical image segmentation pipelines."
    ],
    "topics": [
      "Medical Image Segmentation",
      "Data Augmentation",
      "Superpixels",
      "Saliency",
      "Deep Learning"
    ]
  },
  {
    "title": "Boundary-Aware Superpixel Mixing for Robust Medical Image Segmentation",
    "status": "Manuscript in preparation",
    "description": "Research into data augmentation for medical image segmentation, exploring boundary-aware superpixel mixing to improve model robustness.",
    "id": 1,
    "venue": "Research manuscript",
    "year": "2026",
    "topics": [
      "Medical Image Segmentation",
      "Data Augmentation",
      "Deep Learning",
      "Computer Vision"
    ]
  }
];

export const certifications = [
  {
    "title": "Fundamentals of AI Agents Using RAG and LangChain",
    "issuer": "IBM",
    "id": 1,
    "icon": "🤖",
    "status": "",
    "date": ""
  },
  {
    "title": "Machine Learning Professional Certificate",
    "issuer": "IBM",
    "id": 2,
    "icon": "🎓",
    "status": "",
    "date": ""
  }
];

export const education = [
  {
    "degree": "Master’s in Computer Science — Artificial Intelligence & Data Science",
    "focus": "Artificial Intelligence & Data Science",
    "institution": "University of Montpellier",
    "period": "2024–2026",
    "id": 1,
    "icon": "🎓"
  },
  {
    "degree": "Double Bachelor’s in Mathematics & Computer Science",
    "focus": "",
    "institution": "University of Montpellier",
    "period": "2021–2024",
    "id": 2,
    "icon": "📐"
  }
];
