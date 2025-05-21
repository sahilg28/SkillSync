# 🧠 SkillSync – AI-Powered Job Match Platform

SkillSync is a full-stack platform where users can register, log in, create profiles, browse job listings, and receive AI-powered job recommendations based on their profile and skills.

---

## 🚀 Live Demo Links

- **Backend:** https://skillsync-backend-izv9.onrender.com
- **GitHub Repo:** https://github.com/sahilg28/SkillSync.git

---

## 📦 Tech Stack

- **Frontend:** React.js + Vite + Tailwind CSS  
- **Backend:** Node.js (Express.js)  
- **Database:** MongoDB Atlas  
- **Authentication:** JWT (JSON Web Token)  
- **AI:** Gemini API

---

## 🔧 Setup Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/sahilg28/SkillSync.git
cd skillsync
```

---

### 🌐 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Then run:

```bash
npm run dev
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🤖 AI Usage & Prompt Design

We use **OpenAI's GPT-3.5 model** to recommend jobs to users based on their profile.

### Example Prompt Used in Backend:

```js
const prompt = `
A user has the following profile:
- Name: ${user.name}
- Skills: ${user.skills.join(", ")}
- Experience: ${user.experience} years
- Preferred Job Type: ${user.jobType}
- Location: ${user.location}

Given this, recommend 3 job roles from the job database that match best.
Respond only with:
1. Job Title
2. Company
3. Location
4. Why it matches
`;
```

---

## 📖 API Documentation

| Endpoint            | Description                          |
|---------------------|--------------------------------------|
| `/api/auth/register`| Register a new user                  |
| `/api/auth/login`   | Log in and receive JWT token         |
| `/api/profile`      | Create or update user profile        |
| `/api/jobs`         | Get a list of all available jobs     |


---

## 🗂 Code Architecture Overview

```
/skillsync
│
├── backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

---

## ✅ Features Implemented

- ✅ JWT-based Authentication (Register/Login)
- ✅ Profile creation with fields like skills, experience, and job type
- ✅ Job listings page
- ✅ AI-powered job recommendation logic
- ✅ Responsive and minimal UI using Tailwind CSS

---