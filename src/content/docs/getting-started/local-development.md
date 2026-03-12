---
title: Local Development
description: How to run Evergreeners locally.
---

# Local Development

After installing the dependencies, you can start the development server.

## Starting the Dev Server

Run the following command to start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Environment Variables

You'll need to set up environment variables for full functionality. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Fill in the required fields, including your database connection string and API keys.

## Running the API

If you are working on the backend, you may need to start the API separately:

```bash
npm run api
```

## Building for Production

To create a production build, use:

```bash
npm run build
```
