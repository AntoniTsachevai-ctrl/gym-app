import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  const trainers = [
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      city: 'London',
      country: 'UK',
      avatar: '/assets/avatar3.jpg',
      verified: true,
      coverImg: '/assets/yoga.jpg',
      speciality: 'Yoga Instructor',
      tags: ['yoga', 'instructor', 'flexibility', 'nutrition'],
      rating: 4.8,
    },
    {
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      city: 'Manchester',
      country: 'UK',
      avatar: '/assets/avatar1.jpg',
      verified: true,
      coverImg: '/assets/men.jpg',
      speciality: 'HIIT Coach',
      tags: ['hiit', 'coach', 'powerlifting'],
      rating: 4.9,
    },
    {
      name: 'David Lee',
      email: 'david.lee@example.com',
      city: 'Birmingham',
      country: 'UK',
      avatar: '/assets/avatar2.jpg',
      verified: true,
      coverImg: '/assets/men2.jpg',
      speciality: 'Strength Training',
      tags: ['strength', 'training', 'cardio'],
      rating: 4.5,
    },
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      city: 'Liverpool',
      country: 'UK',
      avatar: '/assets/avatar4.jpg',
      verified: true,
      coverImg: '/assets/crossfit.jpg',
      speciality: 'CrossFit',
      tags: ['crossfit', 'coach', 'functional'],
      rating: 4.9,
    },
  ];

  for (const trainer of trainers) {
    await prisma.trainer.upsert({
      where: { email: trainer.email },
      update: {},
      create: trainer,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
