# Photo Gallery API

This standalone backend does not alter the existing React application.

## Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and a secure `JWT_SECRET`.
2. Install dependencies: `npm install`
3. Run the API: `npm run dev`
4. In a second terminal, run `npm run seed` once to insert the gallery images.

## Endpoints

- `GET /api/health`
- `POST /api/auth/register` — `{ name, email, password }`
- `POST /api/auth/login` — `{ name, email, password }` (name must match the account)
- `GET /api/auth/me` — bearer token required
- `GET /api/images?category=Nature`
- `POST /api/images` — bearer token required; `{ title, category, imageUrl, description? }`
- `GET /api/images/favorites` — bearer token required
- `PUT /api/images/:id/favorite` — bearer token required
