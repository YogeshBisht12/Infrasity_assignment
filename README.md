
<p align="center">
  <img src="https://img.icons8.com/color/96/000000/source-code.png" width="120"/>
</p>

<h1 align="center">⚡ Authenticated CRUD API (Node.js + Express + MongoDB + JWT)</h1>

<p align="center">A production-ready, secure REST API with authentication, authorization, and CRUD operations.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16+-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Express.js-Latest-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MongoDB-Atlas-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/JWT-Secure-orange?style=for-the-badge"/>
</p>

---

## 🚀 Overview

This project is a **fully authenticated CRUD API** built with:

- 🔐 **JWT Authentication**
- 🗂 **User-specific Notes CRUD**
- 🛡 **Protected Endpoints**
- 📦 **MongoDB Atlas + Mongoose**
- ⚙️ **ESM Syntax (import/export)**

Perfect for MERN stack developers and backend engineers looking to learn **secure authentication** and **REST API design**.

---

## 📁 Project Structure

```
auth-crud-api/
├── server.js
├── package.json
├── .env
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   └── Note.js
├── middleware/
│   └── auth.js
└── routes/
    ├── auth.routes.js
    └── note.routes.js
```

---

## ✨ Features

### 🔐 Authentication
- Register Users
- Login
- Password Hashing (bcrypt)
- JWT Token Generation
- Auth Middleware

### 📝 Notes CRUD (Protected)
- Create Notes  
- Get User Notes  
- Update Notes  
- Delete Notes  

### 🛡 Security Best Practices
- Hashed Passwords
- Protected Routes
- Token Verification
- Error Handling Middleware

---

## ⚙️ Installation

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/auth-crud-api.git
cd auth-crud-api
```

### 2️⃣ Install Packages
```bash
npm install
```

### 3️⃣ Configure Environment
Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1d
```

### 4️⃣ Start Server
```bash
npm run dev
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes
| Method | Route | Description |
|--------|--------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

### 📝 Notes Routes (Protected)

| Method | Route | Description |
|--------|--------|-------------|
| POST | /api/notes | Create Note |
| GET | /api/notes | Get All Notes |
| GET | /api/notes/:id | Get One Note |
| PUT | /api/notes/:id | Update Note |
| DELETE | /api/notes/:id | Delete Note |

---

## 🧪 Testing (Postman)

### Login to get token  
Then add header to ALL protected routes:

```
Authorization: Bearer <your_token_here>
```

### Example Create Note
```json
{
  "title": "My Note",
  "content": "This is content."
}
```

---

## 🚀 Future Enhancements
- Refresh Tokens  
- Admin/User Roles  
- Swagger Docs  
- Email Verification  
- Rate Limiting  

---

## ❤️ Support The Project  
If this project helped you:

⭐ **Star the repository**  
🎯 Share with developers  
🔥 Follow for more awesome projects  

---

## 👨‍💻 Developed By  
**Yogesh Bisht**  
MERN Stack Developer | Backend Engineer  
