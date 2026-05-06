# 🌱 Kisan Setu (Har Kisan ka Digital Saathi)


[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

**Kisan Setu** is a comprehensive, AI-driven agricultural empowerment platform designed to bridge the gap between traditional farming and modern technology. Meaning "Farmer's Companion," this project provides farmers with real-time insights, disease diagnosis, and market intelligence to ensure sustainable and profitable farming.

---

## 🚀 Key Features

### 🩺 Doctor AI (Disease Diagnosis)
- **AI-Powered Analysis**: High-accuracy crop disease detection using advanced Computer Vision (powered by Google Gemini/OpenAI).
- **Instant Solutions**: Upload a photo of a sick plant and receive immediate treatment recommendations and eco-friendly solutions.

### 📈 Smart Market Analytics
- **Live Price Tracking**: Real-time visualization of crop prices across various markets (Mandis).
- **Trend Prediction**: Data-driven charts using **Recharts** to help farmers decide the best time to sell.

### 🚜 Personalized Dashboards
- **Farmer Dashboard**: Tailored view for crop health, weather snapshots, and active alerts.
- **Advisor Dashboard**: A specialized interface for agricultural experts to manage and support multiple farmers.

### 🌡️ Precision Weather & Forecasting
- **Location-Aware Updates**: Hyper-local weather data to help plan irrigation and harvest.
- **Critical Alerts**: Warnings for pests and extreme weather conditions.

### 🏛️ Government Schemes & Subsidies
- **Centralized Repository**: Easy access to the latest state and central government schemes, helping farmers benefit from financial aid.

### 🌍 Multi-Language Support
- Fully localized in **Hindi and English** to ensure accessibility for the diverse farming community in India.

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS, Framer Motion (Animations)
- **Charts**: Recharts
- **Icons**: Lucide React, React Icons
- **i18n**: react-i18next

### **Backend**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens), Bcrypt.js
- **AI Integration**: Google Generative AI (Gemini SDK), OpenAI API
- **Utilities**: Multer (File Uploads), Axios, Cheerio (Web Scraping)

---

## 📂 Project Structure

```bash
kisan-Setu/
├── Frontend/           # React + Vite application
│   ├── src/
│   │   ├── api/        # API service layers
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Feature-specific pages (Doctor AI, Market, etc.)
│   │   ├── context/    # State management (UserContext)
│   │   └── locales/    # Translation files
├── Backend/            # Node.js + Express server
│   ├── controllers/    # Business logic for AI, Market, and Weather
│   ├── models/         # Mongoose schemas (User, Crop, Scheme)
│   ├── routes/         # API endpoints
│   └── middlewares/    # Auth & Error handling
└── assets/             # Project-wide static assets
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local installation
- API Keys for: Google Gemini, Weather API (OpenWeather), and OpenAI (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushaggarwal05/Kisan-Saathi-Project-.git
   cd kisan-Saathi
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   # Create a .env file with:
   # PORT, MONGO_URI, JWT_SECRET, GEMINI_API_KEY, WEATHER_API_KEY
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

---

## 💡 Vision for the Future

Kisan Setu aims to evolve into a full-scale **Agri-Tech Ecosystem** by integrating:
- **IoT Sensors**: For real-time soil moisture and pH level monitoring.
- **E-Commerce Marketplace**: Direct farmer-to-consumer sales to eliminate middlemen.
- **Community Forum**: A social space for farmers to share knowledge and experiences.

---

## 👥 Contributors
- **Ayush Aggarwal** ([@Ayushaggarwal05](https://github.com/Ayushaggarwal05))

---

*Made with ❤️ for the Indian Farming Community.*
