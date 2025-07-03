<h1 align="center">🌤️ Weather App</h1>

<p align="center">
  A simple weather app built with <strong>Express.js</strong>, <strong>EJS</strong>, and <strong>CSS</strong> that fetches real-time weather data from <strong>WeatherAPI</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="status" />
  <img src="https://img.shields.io/badge/Backend-Express.js-blue" alt="backend" />
  <img src="https://img.shields.io/badge/View-EJS-yellow" alt="view-engine" />
  <img src="https://img.shields.io/badge/API-WeatherAPI-lightblue" alt="api" />
</p>

---

### 📌 Table of Contents

- [📂 Folder Structure](#-folder-structure)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [📸 Screenshots](#-screenshots)
- [📃 License](#-license)
- [👨‍💻 Author](#-author)

---

## 📂 Folder Structure

```bash
project-root/
│
├── public/
│   └── style.css            # Styling file
│
├── views/
│   └── weather.ejs          # Frontend (form + results)
│
├── app.js                   # Express app with routes
├── package.json             # Project metadata and dependencies
└── .env (optional)          # API key if environment-based
```

## 🚀 Features
- Get real-time temperature by city name

- Displays corresponding weather icon

- Uses WeatherAPI.com for live data

- Clean and minimal UI using EJS and CSS

- Error handling for invalid cities or API failures

## 🛠️ Tech Stack
| Technology | Purpose                 |
| ---------- | ----------------------- |
| Express.js | Backend/server logic    |
| EJS        | Template engine (views) |
| CSS        | Styling                 |
| WeatherAPI | Weather data provider   |
| Node.js    | Runtime environment     |

1. Clone the repository
```
git clone https://github.com/FaiziCodeSpace/Short-Express-Weather-Project.git
```
2. Navigate into the project
```
cd weather-app
```
3. Install dependencies
```
npm install
```
4. Start the server
```
npm run dev
```
5. Visit in browser
```
http://localhost:3000/weather
```
💻 Usage
- Enter a city name in the input field

- Press Search

- See the temperature and weather icon based on real-time data

### 📃 License
This project is licensed under the MIT License.
Feel free to use, modify, or expand it for personal or educational purposes.

👨‍💻 Author
Faizan — MERN Stack Developer
📍 Pakistan
💼 Passionate about building full-stack projects
📬 faiziwebdev1@gmail.com






