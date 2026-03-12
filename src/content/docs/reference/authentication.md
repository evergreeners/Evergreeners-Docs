---
title: Authentication
description: How we secure your account.
---

# Authentication

Evergreeners uses **Better Auth** for managing identities and sessions.

## Providers

- **GitHub OAuth**: Our primary method for linking accounts and verifying developer activity.
- **Email/Password**: Available for basic account management.

## Session Management

Sessions are managed using secure, HTTP-only cookies. JWTs are used for stateless API access in some contexts.

## Security Practices

1. **Passwords**: Hashed using Argon2.
2. **Tokens**: OAuth tokens are encrypted at rest.
3. **Cross-Site Protection**: CSRF protection is enabled on all mutating endpoints.
