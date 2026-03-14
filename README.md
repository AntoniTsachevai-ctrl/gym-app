# Gym App Monorepo

Full-stack gym application with Next.js frontend and Fastify backend.

## Project Structure

```
gym-app/
├── frontend/          # Next.js app (port 3000)
├── backend/           # Fastify API (port 4000)
├── shared/            # Shared TypeScript types
├── .husky/            # Git hooks
└── .vscode/           # Editor settings
```

## Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **pnpm** installed globally: `npm install -g pnpm`
- **Supabase account** (for backend database)

### Install Dependencies

```bash
pnpm install
```

This installs dependencies for both frontend and backend using pnpm workspaces.

### Backend Setup

See [backend/README.md](backend/README.md) for detailed setup instructions including:
- Supabase database configuration
- Environment variables
- Database migrations and seeding

**Quick backend setup:**
```bash
cd backend
cp .env.example .env
# Edit .env with your Supabase credentials
pnpm run db:generate
pnpm run db:migrate
pnpm run db:seed
```

### Run Development Servers

```bash
pnpm run dev
```

This starts both apps concurrently:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

### Run Individually

```bash
pnpm run dev:frontend    # Frontend only
pnpm run dev:backend     # Backend only
```

## Available Scripts

- `pnpm run dev` - Run both frontend and backend
- `pnpm run build` - Build both apps
- `pnpm run format` - Format code with Prettier
- `pnpm run typecheck` - Type-check both apps
- `pnpm run lint` - Lint frontend code

## Migration from npm

If you previously used npm, see [MIGRATION_TO_PNPM.md](MIGRATION_TO_PNPM.md) for migration instructions.

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
