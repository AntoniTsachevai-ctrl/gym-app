import cors from '@fastify/cors';
import 'dotenv/config';
import Fastify from 'fastify';
import { registerRoutes } from './routes';

const fastify = Fastify({
  logger: true,
});

async function start() {
  try {
    await fastify.register(cors, {
      origin: 'http://localhost:3000',
      credentials: true,
    });

    await fastify.register(registerRoutes);

    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    console.log('🚀 Server running on http://localhost:4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
