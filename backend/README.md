# Backend - Fastify API

Simple, fast REST API built with Fastify, TypeScript, and PostgreSQL.

## Structure

```
src/
├── server.ts           # Main Fastify server
├── lib/
│   └── prisma.ts       # Prisma client singleton
├── routes/
│   └── trainers.ts     # Trainers endpoints
└── services/
    └── trainers.ts     # Business logic with Prisma
prisma/
├── schema.prisma       # Database schema
└── seed.ts             # Seed data
```

## Database Setup

### 1. Set up PostgreSQL

Choose one option:

**Option A: Cloud (Recommended for quick start)**
- [Neon](https://neon.tech) - Free tier, instant setup
- [Supabase](https://supabase.com) - Free tier with extras
- [Railway](https://railway.app) - Free tier

**Option B: Local with Docker**
```bash
docker run --name gym-postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=gym_app \
  -p 5432:5432 \
  -d postgres
```

**Option C: Local Installation**
- Install PostgreSQL from [postgresql.org](https://www.postgresql.org/download/)
- Create database: `createdb gym_app`

### 2. Configure Environment

Create `backend/.env`:
```bash
# For local PostgreSQL
DATABASE_URL="postgresql://postgres:password@localhost:5432/gym_app?schema=public"

# For cloud (use your connection string)
DATABASE_URL="postgresql://user:pass@host.region.provider.com/dbname"
```

### 3. Run Migrations

```bash
cd backend
npm run db:migrate      # Create database tables
npm run db:seed         # Add sample data
```

## Running

```bash
npm run dev             # Development with hot reload
npm run build           # Build for production
npm start               # Run production build
```

## Database Commands

```bash
npm run db:generate     # Generate Prisma client
npm run db:migrate      # Run migrations
npm run db:push         # Push schema without migration
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio (GUI)
```

## API Endpoints

### Trainers

- `GET /trainers` - Get all trainers
- `GET /trainers/:id` - Get trainer by ID
- `POST /trainers` - Create new trainer

## Adding New Routes

### Simple Route

```typescript
// src/routes/workouts.ts
import { FastifyInstance } from 'fastify'

export async function workoutsRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return { workouts: [] }
  })
}

// Register in src/server.ts
await fastify.register(workoutsRoutes, { prefix: '/workouts' })
```

### With Service Layer

```typescript
// src/services/workouts.ts
export class WorkoutsService {
  findAll() {
    return []
  }
}

// src/routes/workouts.ts
import { WorkoutsService } from '../services/workouts'

export async function workoutsRoutes(fastify: FastifyInstance) {
  const service = new WorkoutsService()

  fastify.get('/', async () => {
    return service.findAll()
  })
}
```

## Tech Stack

- **Fastify** - Fast web framework
- **PostgreSQL** - Database
- **Prisma** - Type-safe ORM
- **TypeScript** - Type safety
- **tsx** - TypeScript execution for dev mode

## Troubleshooting

### Prisma Client errors
Run `npm run db:generate` to regenerate the Prisma client.

### Migration errors
If migrations fail, you can reset the database:
```bash
npx prisma migrate reset
```

### Can't connect to database
- Check your `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify credentials and database name
