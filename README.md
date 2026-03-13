# Gym App Monorepo

Full-stack gym application with Next.js frontend and NestJS backend.

## Project Structure

```
gym-app/
├── frontend/          # Next.js app (port 3000)
├── backend/           # NestJS API (port 4000)
├── shared/            # Shared TypeScript types
├── .husky/            # Git hooks
└── .vscode/           # Editor settings
```

## Getting Started

### Install Dependencies

```bash
npm install
```

This installs dependencies for both frontend and backend using npm workspaces.

### Run Development Servers

```bash
npm run dev
```

This starts both apps concurrently:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

### Run Individually

```bash
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
```

## Available Scripts

- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both apps
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Type-check both apps
- `npm run lint` - Lint frontend code

## API Endpoints

### Trainers

- `GET http://localhost:4000/trainers` - Get all trainers
- `GET http://localhost:4000/trainers/:id` - Get trainer by ID
- `POST http://localhost:4000/trainers` - Create new trainer

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend
- NestJS
- TypeScript
- REST API

### Shared
- TypeScript types
- Shared between frontend and backend

## Git Hooks

- **pre-commit**: Validates branch naming convention
- **commit-msg**: Validates commit message format (Conventional Commits)
