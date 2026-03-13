import { FastifyInstance } from 'fastify';
import type { User } from '../../../shared/types/user.types';
import { UsersService } from '../services/users';

export async function usersRoutes(fastify: FastifyInstance) {
  const usersService = new UsersService();

  fastify.get('/', async () => {
    return await usersService.findAll();
  });

  fastify.get<{ Params: { id: string } }>('/:id', async (request, reply) => {
    const user = await usersService.findOne(request.params.id);
    if (!user) {
      return reply.status(404).send({ error: 'User not found' });
    }
    return user;
  });

  fastify.post<{ Body: Omit<User, 'id' | 'createdAt' | 'updatedAt'> }>('/', async (request) => {
    return await usersService.create(request.body);
  });

  fastify.patch<{ Params: { id: string }; Body: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>> }>(
    '/:id',
    async (request, reply) => {
      const user = await usersService.update(request.params.id, request.body);
      if (!user) {
        return reply.status(404).send({ error: 'User not found' });
      }
      return user;
    }
  );

  fastify.delete<{ Params: { id: string } }>('/:id', async (request, reply) => {
    await usersService.delete(request.params.id);
    return reply.status(204).send();
  });
}
