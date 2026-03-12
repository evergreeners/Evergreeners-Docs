---
title: Architecture
description: The bird's-eye view of Evergreeners.
---

# Architecture

Evergreeners is built with modern, scalable technologies designed for high performance and developer happiness.

## Technology Stack

- **Frontend**: React + Vite + Tailwind CSS.
- **Backend API**: Fastify (Node.js) with TypeScript.
- **Database**: PostgreSQL with Drizzle ORM.
- **Auth**: Better Auth.
- **Hosting**: Vercel for the frontend and API.

## Data Flow

1. **Activity Sensor**: A background worker periodically polls GitHub APIs for user activity.
2. **Logic Engine**: The Streak System calculates consistency scores and updates reputation.
3. **Frontend**: The React application consumes the API to render dynamic heatmaps and the Consistency Garden.

## Project Structure

```text
evergreeners/
├── server/           # Backend Fastify API
├── src/              # Frontend React application
│   ├── components/   # Reusable UI elements
│   ├── pages/        # Main application routes
│   └── hooks/        # Custom React hooks
├── docs/             # This documentation site (Astro Starlight)
└── drizzle/          # Database migrations and schema
```
