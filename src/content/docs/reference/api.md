---
title: API Reference
description: Technical details for the Evergreeners API.
---

# API Reference

The Evergreeners API is built using **Fastify** and provides endpoints for managing users, streaks, and quests.

## Base URL

```
https://api.evergreeners.dev/v1
```

## Authentication

All private endpoints require a Bearer token in the `Authorization` header.

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Core Endpoints

### Get User Profile
`GET /users/:username`

### Get Current Streak
`GET /streaks/:userId`

### List Quests
`GET /quests`

### Accept Quest
`POST /quests/:questId/accept`

## Rate Limiting

We allow up to 1000 requests per hour for authenticated users.
