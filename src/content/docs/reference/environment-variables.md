---
title: Environment Variables
description: List of supported configuration variables.
---

# Environment Variables

These variables are required for the application to run correctly in different environments.

## Database

- `DATABASE_URL`: The connection string for your PostgreSQL database.

## Authentication

- `BETTER_AUTH_SECRET`: A secure key for signing sessions.
- `GITHUB_CLIENT_ID`: OAuth client ID from GitHub.
- `GITHUB_CLIENT_SECRET`: OAuth client secret from GitHub.

## AI & External Services

- `GEMINI_API_KEY`: For generating quest descriptions and analyzing code.

## Frontend

- `VITE_API_URL`: The URL where the backend API is hosted.
- `VITE_APP_URL`: The base URL of the frontend application.
