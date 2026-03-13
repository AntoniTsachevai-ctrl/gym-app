import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding users...');

  const users = [
    {
      name: 'Alice Smith',
      email: 'alice@example.com',
      avatar: '/assets/user1.jpg',
      role: 'admin',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      avatar: '/assets/user2.jpg',
      role: 'user',
    },
    {
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'user',
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.log('✅ Users seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding users:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
