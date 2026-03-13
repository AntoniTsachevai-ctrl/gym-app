import type { Trainer } from '../../../shared/types/trainer.types';
import { prisma } from '../lib/prisma';

export class TrainersService {
  async findAll(): Promise<Trainer[]> {
    const trainers = await prisma.trainer.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return trainers.map(this.mapToTrainer);
  }

  async findOne(id: string): Promise<Trainer | null> {
    const trainer = await prisma.trainer.findUnique({
      where: { id },
    });
    return trainer ? this.mapToTrainer(trainer) : null;
  }

  async create(data: Omit<Trainer, 'id' | 'createdAt' | 'updatedAt'>): Promise<Trainer> {
    const trainer = await prisma.trainer.create({
      data,
    });
    return this.mapToTrainer(trainer);
  }

  private mapToTrainer(trainer: any): Trainer {
    return {
      ...trainer,
      createdAt: trainer.createdAt.toISOString(),
      updatedAt: trainer.updatedAt.toISOString(),
    };
  }
}
