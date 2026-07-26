<div align="center">

# 🧪 LabFlow AI

### AI-Powered Smart Laboratory Workflow Management System

<p align="center">
Transforming laboratory operations with intelligent workflow automation, predictive analytics, AI-powered decision support, and real-time analytics.
</p>



</div>

---

# 📖 Project Overview

LabFlow AI is a modern Laboratory Workflow Management System designed to digitize and optimize laboratory operations.

Traditional laboratories often struggle with:

- Manual sample tracking
- Delayed processing
- Uneven technician workload
- Poor visibility of pending samples
- Lack of intelligent decision support
- Limited analytics

LabFlow AI solves these challenges through AI-driven recommendations, predictive risk analysis, workflow automation, and real-time analytics.

---

# ❗ Problem Statement

Laboratories process hundreds of patient samples every day.

Managing these samples manually often results in:

- Lost or delayed samples
- Increased turnaround time
- Technician overload
- Human errors
- Lack of centralized monitoring
- No predictive insights

Existing systems provide storage but very little intelligence.

Healthcare professionals need a smart platform capable of analyzing workflow, identifying risks, and recommending actions before delays occur.

---

# 💡 Solution

LabFlow AI provides a centralized AI-powered laboratory workflow management system.

The platform enables laboratories to:

- Register patient samples
- Track processing status
- Monitor technician workload
- Predict high-risk delayed samples
- Receive AI-powered recommendations
- Generate reports
- Visualize workflow analytics
- Improve operational efficiency

---

# ✨ Key Features

## 🧪 Sample Management

- Add new laboratory samples
- Edit sample information
- Delete records
- Search by Patient Name
- Search by Sample ID
- Filter by Status

---

## 📊 Smart Dashboard

- Total Samples
- Pending Samples
- Processing Samples
- Completed Samples
- Laboratory Health Score
- Smart KPIs

---

## 🤖 Artificial Intelligence

### AI Technician Recommendation

Automatically recommends the best technician based on current workload.

---

### Predictive Risk Analysis

Identifies samples likely to become delayed.

Provides:

- Risk Level
- Probability
- Recommendation

---

### Smart Alerts

Automatically detects:

- Delayed samples
- Critical pending tests
- Laboratory workload issues

---

### AI Chat Assistant

Users can ask questions such as:

- Pending samples
- Completed samples
- Technician workload
- Delayed reports

---

## 📈 Analytics Dashboard

Interactive charts showing:

- Sample Status Distribution
- Pending Trends
- Laboratory Performance
- Processing Statistics

---

## 📄 Reports

Generate:

- Sample Summary
- Status Reports
- CSV Export

---

## ⚙ Settings

- Administrator Profile
- Notification Settings
- Appearance Settings
- Laboratory Information

---

# 🛠 Technology Stack

## Frontend

- React
- Vite
- Axios
- React Router
- React Icons
- CSS3

---

## Backend

- Node.js
- Express.js

---

## Database

- SQLite

---

## Visualization

- Chart.js

---

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```text
Lab-Register-System
│
├── client
│   ├── src
│   │
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── styles
│   ├── api
│   └── utils
│
├── lab-backend
│   ├── controllers
│   ├── routes
│   ├── database
│   ├── models
│   ├── api
│   └── server.js
│
├── screenshots
├── docs
│
└── README.md
```

---

# 🏗 System Architecture

```text
                        ┌────────────────────────────┐
                        │       React + Vite UI      │
                        │ Dashboard • AI • Reports   │
                        └─────────────┬──────────────┘
                                      │
                               Axios HTTP Requests
                                      │
                        ┌─────────────▼──────────────┐
                        │      Express.js Server     │
                        │  REST API & Business Logic │
                        └─────────────┬──────────────┘
                                      │
                         SQLite Queries│
                                      │
                        ┌─────────────▼──────────────┐
                        │      SQLite Database       │
                        │ Sample Records & Reports   │
                        └─────────────┬──────────────┘
                                      │
                        ┌─────────────▼──────────────┐
                        │     AI Recommendation      │
                        │ Predictive Risk Analysis   │
                        │ Smart Alerts              │
                        └────────────────────────────┘
```

---

# 🤖 AI Workflow

```text
Sample Registration
        │
        ▼
Store in SQLite Database
        │
        ▼
Analyze Sample Status
        │
        ▼
Check Waiting Time
        │
        ▼
Evaluate Technician Workload
        │
        ▼
Generate AI Recommendation
        │
        ▼
Predict Sample Risk
        │
        ▼
Display Smart Alerts
        │
        ▼
Update Dashboard & Reports
```

---

# 📸 Application Screenshots

> **Note:** Add screenshots inside the `screenshots/` folder and update the paths below.

## 🏠 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 🧪 Sample Registry

![Sample Registry](screenshots/samplereg.png)
![Sample Registry](screenshots/samplereg2.png)

---

## 📊 Analytics

![Analytics](screenshots/analytics.png)

---

## 🤖 AI Insights

![AI Insights](screenshots/AIinsig.png)

---

## 📄 Reports

![Reports](screenshots/reports.png)

---

## ⚙ Settings

![Settings](screenshots/setting.png)

---

# 🚀 Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Manisha0597/Lab-Register-System.git
```

```bash
cd Lab-Register-System
```

---

## 2️⃣ Install Frontend

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend

```bash
cd ../lab-backend
npm install
```

---

## 4️⃣ Start Backend

```bash
npm start
```

Backend runs at:

```text
http://localhost:5000
```

---

## 5️⃣ Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/samples` | Fetch all samples |
| GET | `/api/samples/:id` | Fetch sample by ID |
| POST | `/api/samples` | Add new sample |
| PUT | `/api/samples/:id` | Update sample |
| DELETE | `/api/samples/:id` | Delete sample |

---

# 🗄 Database Schema

| Field | Type |
|--------|------|
| id | INTEGER |
| patient | TEXT |
| test | TEXT |
| technician | TEXT |
| collected | TEXT |
| status | TEXT |
| days | INTEGER |

---

# 📈 Future Scope

Planned improvements include:

- User Authentication (JWT)
- Role-Based Access Control
- Barcode / QR Code Integration
- Email & SMS Notifications
- PDF Report Generation
- Cloud Database (PostgreSQL/MySQL)
- Docker Deployment
- Machine Learning-Based Delay Prediction
- Hospital Information System (HIS) Integration
- Multi-Laboratory Support

---

# 🗺 Development Roadmap

- ✅ Laboratory Dashboard
- ✅ Sample Registry
- ✅ Full CRUD Operations
- ✅ SQLite Database
- ✅ AI Recommendation Engine
- ✅ Predictive Risk Analysis
- ✅ Smart Alerts
- ✅ Analytics Dashboard
- ✅ Reports Module
- ✅ Settings Module
- 🔄 Authentication & User Roles
- 🔄 Cloud Deployment
- 🔄 Mobile Application

---

# 👩‍💻 Author

**Manisha S**

B.Tech – Artificial Intelligence & Data Science

📧 Email: *Add your email here*

🔗 LinkedIn: https://www.linkedin.com/in/manisha-s-ba35bb350

💻 GitHub: https://github.com/Manisha0597

