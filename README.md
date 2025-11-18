🌟 Authenticated CRUD API using Node.js, Express, MongoDB & JWT

A fully functional, secure REST API built with Node.js, Express, MongoDB, and JWT Authentication.
This project includes User Registration, Login, and Protected CRUD Operations for Notes.

Perfect for learning backend development, authentication systems, and building production-ready REST APIs.

🚀 Features
🔐 Authentication

User Registration

User Login

JWT-based Authentication

Password Hashing with bcrypt

Protected Routes

📝 Notes CRUD

Create Notes

Get All Notes (User-specific)

Get Single Note

Update Note

Delete Note

🛡 Security

JWT Token Validation Middleware

Hashed Passwords

Protected API Endpoints

📁 Folder Structure
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

🛠️ Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

Nodemon (for development)

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/auth-crud-api.git
cd auth-crud-api

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
PORT=5000
MONGODB_URI=your-mongodb-uri-here
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1d

4️⃣ Start the Server
npm run dev


Server will run at:

http://localhost:5000

🔌 API Endpoints
🔐 Authentication Routes
Method	Route	Description
POST	/api/auth/register	Register User
POST	/api/auth/login	Login User
📝 Notes Routes (Protected)
Method	Route	Description
POST	/api/notes	Create a Note
GET	/api/notes	Get All Notes
GET	/api/notes/:id	Get Single Note
PUT	/api/notes/:id	Update Note
DELETE	/api/notes/:id	Delete Note
🔑 Authentication Header Format

All protected routes require a Bearer Token:

Authorization: Bearer <your-jwt-token>

🧪 Testing the API (Postman)
1️⃣ Register
POST /api/auth/register


Body (JSON):

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}

2️⃣ Login
POST /api/auth/login


Body (JSON):

{
  "email": "test@example.com",
  "password": "password123"
}


You will receive a JWT token.

3️⃣ Create a Note
POST /api/notes


Headers:

Authorization: Bearer <token>
Content-Type: application/json


Body:

{
  "title": "My First Note",
  "content": "Hello world!"
}

🛠️ Update & Delete Examples
✏️ Update Note
PUT /api/notes/:id


Body:

{
  "title": "Updated Title",
  "content": "Updated Content"
}

❌ Delete Note
DELETE /api/notes/:id

🧑‍💻 Future Improvements

Refresh Tokens

Role-Based Access (Admin/User)

Pagination for Notes

Profile Management

File Upload Support

🤝 Contributing

Pull requests are welcome!
Open an issue if you want a new feature or find a bug.

⭐ Support

If you like this project:

⭐ Star this repository
📢 Share it with friends
🔥 Use it in your own projects

👨‍💻 Author

Yogesh Bisht
Web Developer | MERN Stack | API Specialist
