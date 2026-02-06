🏕️ **HikeHide**

HikeHide is a full-stack Airbnb-like web application where users can discover, create, review, and manage travel listings.

It is built using the MVC architecture with authentication, authorization, image uploads, and cloud deployment.


**🚀 Live Demo**

**👉 Deployed on Render**

https://hikehide.onrender.com


**🛠️ Tech Stack**

**Frontend**

* EJS (Embedded JavaScript Templates)

* Bootstrap 5

* Font Awesome

* Custom CSS

**Backend**

* Node.js

* Express.js

* MVC Architecture

**Database**

* MongoDB Atlas

* Mongoose ODM

**Authentication & Security**

* Passport.js (Local Strategy)

* Express Session

* MongoDB Session Store (connect-mongo)

* Password hashing with bcrypt

**File Uploads**

* Multer

* Cloudinary (Image hosting)

**Validation & Utilities**

* Joi (Schema validation)

* connect-flash (Flash messages)

* method-override

**Deployment**

* Render (Backend)

* MongoDB Atlas (Cloud Database)

 **✨ Features**

* 🔐 User authentication (Sign up / Login / Logout)

* 🏠 Create, edit, and delete listings

* 🖼️ Upload images using Cloudinary

* ⭐ Add reviews and ratings

* 🔒 Authorization (only owners can edit/delete)

* 💬 Flash messages for user feedback

* 📱 Responsive UI
  

**📂 Project Structure (MVC)**

HikeHide/
│
├── controllers/      # Route logic

├── models/           # Mongoose schemas

├── routes/           # Express routes

├── views/            # EJS templates

│   ├── layouts/

│   ├── listings/

│   └── includes/

├── public/           # CSS, JS, images

├── utils/            # Error handling & helpers

├── middleware.js     # Custom middleware

├── cloudConfig.js    # Cloudinary config

├── app.js            # Main app file

├── package.json

└── .env (ignored)


**⚙️ Environment Variables**

Create a .env file in the root directory:

ATLASDB_URL=your_mongodb_atlas_url

SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_KEY=your_cloudinary_key

CLOUDINARY_SECRET=your_cloudinary_secret

PORT=8080

NODE_ENV=development

**🧪 Local Setup**

1️⃣ Clone the repository

git clone https://github.com/amanversee/HikeHide.git

cd HikeHide

2️⃣ Install dependencies

npm install

3️⃣ Add .env file

(See Environment Variables section)

4️⃣ Run the server

nodemon app.js

Visit 👉 http://localhost:8080/listings



**🧠 What I Learned**

* Implementing MVC architecture in Express

* Secure authentication and authorization

* Handling file uploads with Multer & Cloudinary

* Session management with MongoDB

* Deploying a full-stack Node.js app

* Debugging dependency and environment issues


**👨‍💻 Author**

Aman Mourya

📌 GitHub: @amanversee

**⭐ Show Your Support**

If you like this project, please ⭐ the repository! 


