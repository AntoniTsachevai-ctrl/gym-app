import { FastifyInstance } from 'fastify';
import { trainersRoutes } from './trainers';
import { usersRoutes } from './users';

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(trainersRoutes, { prefix: '/trainers' });
  await fastify.register(usersRoutes, { prefix: '/users' });
}
