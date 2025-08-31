# 🎉 EventX – Event Management System  

EventX is a **full-stack event management platform** built with **React.js, Node.js (Express), and MongoDB**.  
It allows users to explore events, register, book tickets, and manage event participation. Event organizers can create, update, and manage events through a simple, user-friendly dashboard.  

---

## 🚀 Features  

- 🔐 **User Authentication & Authorization** (JWT-based login & signup)  
- 📅 **Event Management** – Create, update, delete, and view events  
- 🎟️ **Booking System** – Reserve and manage event tickets  
- 💳 **Payment Integration** (sample/mock payments included)  
- ⭐ **Feedback & Reviews** – Users can review events  
- 🛠️ **Admin Dashboard** – Manage users and events  

---

## 🛠️ Tech Stack  

**Frontend**:  
- React.js (with React Router, Axios, Tailwind CSS/Bootstrap for styling)  

**Backend**:  
- Node.js + Express.js  
- JWT Authentication  
- RESTful APIs  

**Database**:  
- MongoDB (Mongoose ORM)  

**Deployment**:  
- Frontend → Vercel  
- Backend → Railway  
- Database → MongoDB Atlas  

---

## 📂 Project Structure  

```
EventX/
│── frontend/        # React.js frontend
│── backend/         # Node.js + Express.js backend
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   ├── controllers/ # Business logic
│── database/        # MongoDB collections (sample data)
│── README.md        # Project documentation
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/your-username/EventX.git
cd EventX
```

### 2️⃣ Backend Setup  
```bash
cd backend
npm install
```
Create a `.env` file in backend folder:  
```env
PORT=3001
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```
Run server:  
```bash
npm run dev
```

### 3️⃣ Frontend Setup  
```bash
cd frontend
npm install
npm start
```

---

## 🗄️ Sample Database  

EventX database includes:  
- **Users Collection** → stores user info (name, email, password hash, role)  
- **Events Collection** → stores event details (title, description, location, date, organizer)  
- **Bookings Collection** → tracks reservations (userID, eventID, tickets, payment status)  
- **Feedback Collection** → event ratings & comments  

---

## 📡 API Endpoints  

### User Routes  
- `POST /api/users/register` → Register user  
- `POST /api/users/login` → User login  

### Event Routes  
- `GET /api/events` → Get all events  
- `POST /api/events` → Create event (admin/organizer)  
- `PUT /api/events/:id` → Update event  
- `DELETE /api/events/:id` → Delete event  

### Booking Routes  
- `POST /api/bookings` → Book event  
- `GET /api/bookings/:userId` → Get user bookings  

---

## 🌐 Live Demo  

- Frontend: [EventX Frontend (Vercel)](https://event-x-studio.vercel.app/)  
- Backend API: [EventX Backend (Railway)](https://eventx-studio-production-ffea.up.railway.app/)  
- Database: MongoDB Atlas  

---

## 👨‍💻 Author  

**Abdelrahman Kishk**  
🚀 Passionate about Web Development & Cybersecurity  
🔗 [GitHub Profile](https://github.com/Abdelrahmankishk)  
