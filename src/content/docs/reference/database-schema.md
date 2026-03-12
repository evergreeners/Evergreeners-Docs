---
title: Database Schema
description: Overview of the data structure.
---

# Database Schema

Evergreeners uses a relational database (PostgreSQL) managed with **Drizzle ORM**.

## Core Tables

### `users`
- `id`: UUID (Primary Key)
- `username`: String (Unique)
- `email`: String (Unique)
- `github_id`: String
- `reputation`: Integer

### `streaks`
- `id`: UUID
- `user_id`: UUID (Foreign Key)
- `current_count`: Integer
- `highest_count`: Integer
- `last_activity_at`: Timestamp

### `quests`
- `id`: UUID
- `title`: String
- `description`: Text
- `xp_reward`: Integer
- `type`: Enum (onboarding, skill, community)

## Relationships

- A **User** has one **Streak**.
- A **User** can have many **Quests** (through a join table `user_quests`).
- A **User** can track many **Repositories**.
