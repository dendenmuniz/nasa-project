# 🚀 NASA Space Launch Project

This project is part of a hands-on Node.js course focused on building full-stack applications using the MERN stack (MongoDB, Express, React, Node).

The app simulates a real space launch scheduling system and integrates with the official SpaceX API. It is structured into two parts: **backend (Node.js + Express)** and **frontend (React)**.

## 🧩 Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **React**
- **RESTful APIs**
- **SpaceX API**
- **GitHub Actions (CI/CD)**

## 💻 Features

- Schedule space launches
- List upcoming and historical launches
- Abort launches
- Integrate with the real SpaceX API
- Full REST API communication between frontend and backend

## 📁 Project Structure

```
nasa-project/
├── client/         # Frontend React App
├── server/         # Backend with Node.js + Express
├── .github/        # GitHub Actions workflows
└── README.md
```

## 🔧 My Contributions

✅ Full **backend** development, including:

- Project structure and setup with Express
- MongoDB integration
- Fetching and storing data from SpaceX API
- RESTful route implementation
- Launch scheduling and cancellation logic

✅ On the **frontend**:

- Implemented API calls to connect to the backend
- Integrated dynamic data into the provided UI

⚠️ **Note:** The visual interface (UI/UX) was **provided by the course** and **not developed by me**. My work on the frontend focused solely on integrating API logic and data consumption.

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/dendenmuniz/nasa-project.git
cd nasa-project

# Install dependencies
npm run install

# Start both backend and frontend
npm run start-server
npm run start-client
```

## 📦 Useful Scripts

Defined in `package.json`:

```json
"scripts": {
  "install-server": "npm install --prefix server",
  "install-client": "npm install --prefix client",
  "install": "npm run install-server && npm run install-client",
  "start-server": "npm start --prefix server",
  "start-client": "npm start --prefix client"
}
```

## 🌐 Deployment

This project is deployed on **AWS EC2** and runs inside a **Docker container**. The Docker image, containing the full **Monorepo**, is hosted on **Docker Hub** (private).

- **Docker Image**: The full app (frontend and backend) is containerized in a single image.
- **CI Pipeline**: This project is configured for deployment using **GitHub Actions**. The CI pipeline installs dependencies and builds the project automatically on every push to the `master` branch.

🔗 **[Live Demo](http://16.170.226.199:8000/)**

## 🧠 Key Learnings

- Build enterprise-level Node.js applications and deploy them to the cloud (e.g., AWS)
- Make strong architectural decisions to lead Node.js projects and support team collaboration
- Work with real-world data and APIs (e.g., SpaceX API) in practical projects
- Develop and deploy a full-stack MERN (MongoDB, Express, React, Node) application
- Master the modern backend Node.js ecosystem from scratch
- Build secure and performant large-scale applications with real production concerns
- Understand and apply backend essentials: authentication, file handling, databases (SQL & MongoDB), websockets, and more
- Implement DevOps concepts: load balancing, monitoring, CI/CD, and zero downtime deployments
- Learn and apply security best practices for confident deployment and maintenance

## 📚 Credits

This project is based on the course _"Complete Node.js Developer in 2024 (GraphQL, MongoDB, + more!)"_ by [Academind/ZTM/Andrei Neagoie](https://zerotomastery.io/). The frontend UI was provided by the course instructors.

## 📬 Contact

Feel free to reach out if you’d like to connect or collaborate:

**Denise Muniz** – [linkedin.com/in/deniseamuniz](https://linkedin.com/in/deniseamuniz) 
