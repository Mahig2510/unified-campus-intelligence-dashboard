# CampusIQ - Unified Campus Intelligence Dashboard with AI Assistant

A distributed campus intelligence platform that integrates Library, Events, Cafeteria, and Academic services through independent MCP (Model Context Protocol) servers and provides a unified experience through a centralized dashboard and AI-powered assistant.

---

## Live Demo

### Hosted Application

https://unified-campus-intelligence-dashboard-c6ymbka6p.vercel.app

### Demo Video

https://drive.google.com/file/d/1G6u4q4vM8pkI-LyqA3PQSB9RISbiqlfE/view?usp=sharing

### GitHub Repository

https://github.com/Mahig2510/unified-campus-intelligence-dashboard.git

---

## Important Deployment Note

This project uses multiple backend microservices hosted on Render's free tier.

Render may put inactive services into a sleep state. If the application has not been used recently, please wake the backend services first by opening the following URLs:

### Library MCP

https://unified-campus-intelligence-dashboard-62w8.onrender.com

### Events MCP

https://events-mcp-4uun.onrender.com

### Academics MCP

https://academics-mcp.onrender.com

### Cafeteria MCP

https://cafetaria-mcp.onrender.com

### Orchestrator

https://orchestrator-ylaz.onrender.com

Wait approximately 30–60 seconds for the services to wake up.

After that, open the frontend application:

https://unified-campus-intelligence-dashboard-c6ymbka6p.vercel.app

Once the services are active, all dashboard modules and AI Assistant features function normally.

---

## Project Overview

CampusIQ is a distributed campus management platform designed to unify multiple campus services through a single intelligent interface.

Instead of relying on a monolithic backend, the system follows an MCP-based microservice architecture where each service operates independently while being orchestrated through a centralized gateway.

The platform provides:

- Unified campus dashboard
- AI-powered assistant
- Library management
- Events management
- Cafeteria services
- Academic resources management
- Secure authentication and authorization

---

## Features

### Authentication

- JWT-based authentication
- User registration and login
- Protected routes
- Secure session handling

### Unified Dashboard

- Real-time campus statistics
- Library overview
- Upcoming events summary
- Cafeteria insights
- Academic resource highlights

### Library Module

- Browse available books
- View book details
- Availability tracking
- Search functionality

### Events Module

- Upcoming events
- Event schedules
- Venue information
- Event categories

### Cafeteria Module

- Menu management
- Food pricing
- Availability tracking
- Daily cafeteria information

### Academic Resources Module

- Notes
- Assignments
- Previous Year Papers
- Syllabus resources
- Reference materials

### AI Assistant

- Natural language interaction
- MCP service orchestration
- Function calling
- Context-aware responses
- Multi-service information retrieval

---

## System Architecture

```text
Frontend (React + TypeScript)
            |
            v
      Orchestrator
            |
  -------------------------
  |      |      |       |
  v      v      v       v

Library Events Cafeteria Academics
  MCP     MCP      MCP      MCP
```

The frontend communicates only with the Orchestrator.

The Orchestrator dynamically routes requests to the appropriate MCP service and aggregates responses into a unified format.

---

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB Atlas

### AI Integration

- Groq API
- LLM Tool Calling
- MCP Architecture

### Authentication

- JWT Authentication

### Deployment

Frontend:
- Vercel

Backend Services:
- Render

Database:
- MongoDB Atlas

---

## Project Structure

```text
unified-campus-intelligence-dashboard
│
├── frontend
├── orchestrator
├── library-mcp
├── events-mcp
├── cafetaria-mcp
├── academics-mcp
└── README.md
```

---

## AI Assistant Examples

Example Queries:

- Show me library books
- Show upcoming events
- What's available in cafeteria?
- Show resources for Signals and Systems
- Recommend a book for tomorrow's AI workshop

The assistant automatically determines which MCP service to invoke and generates a unified response.

---

## Deployment Architecture

Frontend:
- Vercel

Backend Services:
- Library MCP
- Events MCP
- Cafeteria MCP
- Academics MCP
- Orchestrator

Database:
- MongoDB Atlas

---

## Demonstration Video

https://drive.google.com/file/d/1G6u4q4vM8pkI-LyqA3PQSB9RISbiqlfE/view?usp=sharing

---

## Key Highlights

- Distributed MCP-based architecture
- AI-powered campus assistant
- Microservices deployment
- JWT authentication
- MongoDB Atlas integration
- REST API architecture
- Cloud deployment
- Responsive user interface
- Real-time service orchestration

---

## Developer

Mahi Yadav

Unified Campus Intelligence Dashboard with AI Assistant

A full-stack distributed campus intelligence platform integrating AI, microservices, cloud deployment, and modern web technologies.