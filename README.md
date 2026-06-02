# Eventora - Full-Stack Event Booking Platform 🎉

Eventora is a full-stack MERN event management platform that allows users to browse events, book tickets securely, and manage their bookings.  
It provides an admin dashboard where event organizers can create events, manage bookings, verify payments, and track analytics.

---

## 🚀 Features

- **User Authentication**
  - Secure registration and login system
  - Password hashing using bcrypt
  - JWT based authentication

- **2FA OTP Verification**
  - Email OTP verification during user authentication
  - OTP verification before confirming event bookings

- **Role-Based Access Control**

  **Admin**
  - Create, update, and delete events
  - Manage booking requests
  - Approve or reject bookings
  - Mark payments as Paid / Not Paid
  - Access admin analytics dashboard

  **User**
  - Browse available events
  - Book event tickets securely
  - View booking status
  - Cancel bookings

- **Event Management**
  - Create free and paid events
  - Add event details, dates, images, categories
  - Manage seating capacity

- **Smart Booking System**
  - OTP protected booking requests
  - Pending booking verification system
  - Prevents overbooking with seat validation

- **Admin Analytics Dashboard**
  - Pending requests tracking
  - Revenue monitoring
  - Confirmed booking analytics

- **Email Notifications**
  - Automated emails using Nodemailer

- **Responsive UI**
  - Modern interface with Tailwind CSS
  - Smooth user experience

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Nodemailer

## Tools
- Git & GitHub
- npm
- Concurrently

---

# 📂 Project Structure

```text
Eventora/

├── client/
│   ├── src/
│   └── dist/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/prakhar4684/event-management-platform-.git

cd event-management-platform-
```

---

## 2. Environment Variables

Create `.env` file inside server folder:

```env
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email_address

EMAIL_PASS=your_email_app_password

PORT=5000
```

> Note: For Gmail, generate an App Password from Google Account settings.

---

# 📦 Install Dependencies

From root folder:

```bash
npm install
```

Install client and server dependencies:

```bash
npm run install:all
```

---

# ▶️ Run Development Server

Start frontend and backend together:

```bash
npm run dev
```

Backend:

```
http://localhost:5000
```

Frontend:

```
http://localhost:5173
```

---

# 🚀 Production Build

Create frontend production build:

```bash
cd client

npm run build
```

Express server serves React build from:

```text
client/dist
```

Run production:

```bash
npm start
```

---

# 👨‍💻 Author

**Prakhar Shukla**

---

⭐ If you like this project, consider giving it a star!