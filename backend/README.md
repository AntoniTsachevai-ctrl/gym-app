# Backend - Fastify API

Simple, fast REST API built with Fastify, TypeScript, and PostgreSQL.

## Structure

```
src/
├── server.ts           # Main Fastify server
├── lib/
│   └── prisma.ts       # Prisma client singleton
├── routes/
│   ├── index.ts        # Route registration
│   ├── trainers.ts     # Trainers endpoints
│   └── users.ts        # Users endpoints
└── services/
    ├── trainers.ts     # Trainers business logic
    └── users.ts        # Users business logic
prisma/
├── schema.prisma       # Database schema
├── seed.ts             # Trainer seed data
└── seedUsers.ts        # User seed data
```

## Quick Start

### Prerequisites

- **Node.js** 18+ installed
- **Supabase account** (free tier available at [supabase.com](https://supabase.com))
- **pnpm** installed globally: `npm install -g pnpm`

### Setup Steps

**1. Install dependencies:**
```bash
pnpm install
```

**2. Set up Supabase database:**
- Go to [supabase.com](https://supabase.com) and create a new project
- Wait for the database to be provisioned (~2 minutes)
- Go to **Settings** → **Database** → **Connection string**
- Copy the **Transaction pooler** URI (port 6543)

**3. Create `.env` file in `backend/` folder:**
```bash
cp .env.example .env
```
Then update with your Supabase connection string:
```bash
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**4. Generate Prisma Client:**
```bash
pnpm run db:generate
```

**5. Run database migrations:**
```bash
pnpm run db:migrate
```

**6. Seed the database:**
```bash
pnpm run db:seed                    # Seed trainers
pnpm exec tsx prisma/seedUsers.ts   # Seed users
```

**7. Start the backend:**
```bash
pnpm run dev
```

Backend will be running at `http://localhost:4000` 🚀

## Database Setup Options

### Option A: Supabase (Recommended - Currently Used)

**Setup:**
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to **Settings** → **Database** → **Connection string**
4. Copy **Transaction pooler** URI

**DATABASE_URL (Transaction pooler - recommended):**
```
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**DATABASE_URL (Direct connection - alternative):**
```
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].supabase.co:5432/postgres"
```

**Benefits:**
- ✅ Free tier (500MB database)
- ✅ No local setup required
- ✅ Easy team collaboration
- ✅ Automatic backups

### Option B: Local with Docker

**Start container:**
```bash
docker run --name gym-postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=gym_app \
  -p 5432:5432 \
  -d postgres
```

**Manage container:**
```bash
docker start gym-postgres    # Start existing container
docker stop gym-postgres     # Stop container
docker rm gym-postgres       # Remove container
```

**DATABASE_URL:**
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/gym_app?schema=public"
```

### Option C: Other Cloud Providers

- [Neon](https://neon.tech) - Free tier, instant setup
- [Railway](https://railway.app) - Free tier

**DATABASE_URL:**
```
DATABASE_URL="postgresql://user:pass@host.region.provider.com/dbname"
```

## Running

```bash
pnpm run dev             # Development with hot reload
pnpm run build           # Build for production
pnpm start               # Run production build
```

## Database Commands

```bash
pnpm run db:generate     # Generate Prisma client
pnpm run db:migrate      # Run migrations
pnpm run db:push         # Push schema without migration
pnpm run db:seed         # Seed database
pnpm run db:studio       # Open Prisma Studio (GUI)
```

## API Endpoints

### Trainers

- `GET /trainers` - Get all trainers
- `GET /trainers/:id` - Get trainer by ID
- `POST /trainers` - Create new trainer

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

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
Run `pnpm run db:generate` to regenerate the Prisma client.

### Migration errors
If migrations fail, you can reset the database:
```bash
pnpm exec prisma migrate reset
```

### Can't connect to database
- Check your `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify credentials and database name
