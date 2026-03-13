import { FastifyInstance } from 'fastify';
import type { Trainer } from '../../../shared/types/trainer.types';
import { TrainersService } from '../services/trainers';

export async function trainersRoutes(fastify: FastifyInstance) {
  const trainersService = new TrainersService();

  fastify.get('/', async () => {
    return await trainersService.findAll();
  });

  fastify.get<{ Params: { id: string } }>('/:id', async (request, reply) => {
    const trainer = await trainersService.findOne(request.params.id);
    if (!trainer) {
      return reply.status(404).send({ error: 'Trainer not found' });
    }
    return trainer;
  });

  fastify.post<{ Body: Trainer }>('/', async (request) => {
    return await trainersService.create(request.body);
  });
}
