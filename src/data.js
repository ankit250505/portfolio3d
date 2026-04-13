import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// AI / ML
import Tools1 from "/assets/tools/python.png";
import Tools2 from "/assets/tools/NumPy.png";
import Tools3 from "/assets/tools/Pandas.png";
import Tools4 from "/assets/tools/scikit-learn.png";

// Backend & APIs
import Tools5 from "/assets/tools/Csharp.png";
import Tools6 from "/assets/tools/dotnet.png";
import Tools7 from "/assets/tools/nodejs.png";

// Frontend
import Tools8 from "/assets/tools/html.png";
import Tools9 from "/assets/tools/css.png";
import Tools10 from "/assets/tools/js.png";
import Tools11 from "/assets/tools/reactjs.png";

// Database
import Tools12 from "/assets/tools/sql-server.png";
import Tools13 from "/assets/tools/mysql.png";
import Tools14 from "/assets/tools/MongoDB.png";

// Tools & Practices
import Tools15 from "/assets/tools/git.png";
import Tools16 from "/assets/tools/github.png";
import Tools17 from "/assets/tools/visualstudio.png";
import Tools18 from "/assets/tools/vscode.png";


export const listTools = [
  // AI / ML
  {
    id: 1,
    gambar: Tools1,
    nama: "Python",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "NumPy",
    ket: "AI / ML Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Pandas",
    ket: "AI / ML Library",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Scikit-learn",
    ket: "Machine Learning",
    dad: "400",
  },

  // Backend & APIs
  {
    id: 5,
    gambar: Tools5,
    nama: "CSharp",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "ASP.NET Core",
    ket: "Backend Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },

  // Frontend
  {
    id: 8,
    gambar: Tools8,
    nama: "HTML5",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "CSS3",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "JavaScript",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "React JS",
    ket: "Frontend Framework",
    dad: "1100",
  },

  // Database
  {
    id: 12,
    gambar: Tools12,
    nama: "SQL Server",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySQL",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "MongoDB",
    ket: "Database",
    dad: "1400",
  },

  // Tools & Practices
  {
    id: 15,
    gambar: Tools15,
    nama: "Git",
    ket: "Version Control",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "GitHub",
    ket: "Repository",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Visual Studio",
    ket: "Code Editor",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "1800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "SpendSense - Expense Tracker Application",
    subtitle: "A web-based finance management system built using ASP.NET MVC",
    fullDescription:"A web-based finance management system built using ASP.NET MVC, designed to help users track their expenses and manage their budget effectively. The application provides a user-friendly interface for adding transactions, generating reports, and visualizing spending patterns.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/ankit250505/Expense-Tracker-App-Asp-Net-Core",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "MedEase - AI Medicare System",
    subtitle: "An intelligent healthcare platform powered by Artificial Intelligence",
    fullDescription:"MedEase is an AI-driven healthcare system designed to simplify and enhance medical services through smart technology. It offers features such as medical report analysis, an AI-based symptom checker, and hospital management tools for efficient patient handling. The system helps users gain quick health insights while assisting healthcare providers in decision-making. With a user-friendly interface and integrated data management, MedEase improves accessibility, accuracy, and efficiency in modern healthcare solutions.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/ankit250505/MEDease_AI_HEALTHCARE_2025",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Guess the Number Game",
    subtitle: "An interactive browser-based game built using HTML, CSS, and JavaScript",
    fullDescription:"An interactive browser-based game built using HTML, CSS, and JavaScript. The game challenges players to guess a randomly generated number within a limited number of attempts. It features a clean and engaging interface, providing immediate feedback on each guess and displaying the player's performance statistics.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/ankit250505/Guess-The-Number-game",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "OneScan - Medical Image Analyser",
    subtitle: "An intelligent system for analyzing medical images using Artificial Intelligence",
    fullDescription:"OneScan is an intelligent system for analyzing medical images using Artificial Intelligence. It provides accurate and efficient image analysis capabilities, assisting healthcare professionals in diagnosing and treating various medical conditions. The system features a user-friendly interface and integrates seamlessly with existing healthcare workflows.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/ankit250505/medical-image-analyser-AI",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Spotify Music Recommendation System",
    subtitle: "A machine learning-based recommendation engine built using Scikit-learn",
    fullDescription:"This project is a music recommendation system developed using machine learning techniques with Scikit-learn in a Jupyter Notebook (.ipynb) environment. It analyzes user preferences and song features to suggest similar tracks based on patterns and data correlations. The system leverages algorithms such as clustering or similarity measures to generate recommendations. Although it does not include a user interface, it effectively demonstrates data preprocessing, model building, and recommendation logic, showcasing practical implementation of machine learning concepts in music personalization.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/ankit250505/SPOTIFY-MUSIC-RECOMMENDATION-SYSTEM",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Cardiovascular Disease Prediction System",
    subtitle: "A machine learning-based engine for early detection of heart disease",
    fullDescription:"A machine learning-based system for predicting the likelihood of cardiovascular diseases. It utilizes various health indicators and patient data to provide accurate risk assessments. The system aims to assist healthcare professionals in early intervention and personalized treatment plans.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/ankit250505/CardioVascular-Disease-Prediction-System",
    dad: "600",
  },
];