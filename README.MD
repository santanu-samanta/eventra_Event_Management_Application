# 🎉 Eventra – Event Management Application

**Eventra** is a full-stack event management platform developed as part of an **SDLC group project**. It provides a scalable and modular structure for handling various types of users: **Admin**, **Organizer**, and **User**, each with their own dashboard and functionality.

## Author
Webskitters SDLC Group Project
Backend Developer: Santanu Samanta
Frontend Contributors: Saikat Loadh,Shilpi Ghosh
## 🚀 Tech Stack

- **Frontend**: TypeScript, Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Passport (Google OAuth)
- **Validation**: Joi, node-input-validator
- **File Upload**: Multer
- **Emailing**: Nodemailer
- **Logging & Monitoring**: Morgan
- **Session Management**: express-session, connect-flash
- **Other Tools**: dotenv, cors, uuid, route-label, cookie-parser, body-parser

---

#  Admin Dashboard
Manage all users and organizers

View system analytics

Approve/reject organizer requests

Manage event categories

# Organizer Dashboard
Create and manage events

Upload images/videos via Multer

View ticket stats and registrations

# User Dashboard
Browse and register for events

View event details and receive email confirmation

Track past and upcoming bookings

# Authentication & Authorization
JWT for secure token-based authentication

Passport with Google OAuth for easy sign-in

Role-based access control to separate admin/organizer/user privileges

## 📁 Project Structure

```bash
├── app.js                 # Entry point of the application
├── app/config/                # Configuration files (e.g., database, passport)
├── app/module/controllers/           # Route logic for admin, organizer, and user
├── app/module/models/                # Mongoose models
├── app/routes/                # Route definitions (labeled using route-label)
├── app/middlewares/           # Custom middleware for auth and validation
├── views/                 # EJS views (admin, organizer, user dashboards)
├── public/                # Static assets
├── app/Helper/                 # Utility functions (email service, etc.)
├── .env                   # Environment variables
├── package.json

