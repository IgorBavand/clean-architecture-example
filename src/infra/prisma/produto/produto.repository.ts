import { Produto } from '@/core/produto/produto.entity';
import { ProdutoRepository } from '@/core/produto/produto.repository';
import { EntityNotFoundError } from '@/core/_shared/errors/entity-not-found.error';
import { Id } from '@/core/_shared/vo/id.vo';
import { PrismaClient } from '@prisma/client';
import { ProdutoMapper } from './produto.mapper';

export class PrismaProdutoRepository implements ProdutoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(produto: Produto): Promise<Produto> {
    const result = await this.prisma.produto.create({
      data: ProdutoMapper.from(produto),
    });
    return ProdutoMapper.to(result);
  }
  async update(produto: Produto): Promise<Produto> {
    const result = await this.prisma.produto.update({
      data: ProdutoMapper.from(produto),
      where: { id: produto.id.value },
    });
    return ProdutoMapper.to(result);
  }
  async delete(produto: Produto): Promise<void> {
    await this.prisma.produto.delete({
      where: { id: produto.id.value },
    });
  }
  async findAll(): Promise<Produto[]> {
    const result = await this.prisma.produto.findMany();
    return result.map(ProdutoMapper.to);
  }
  async findByIdOrFail(id: Id<any>): Promise<Produto> {
    const result = await this.prisma.produto.findUnique({
      where: {
        id: id.value,
      },
    });

    if (!result) {
      throw new EntityNotFoundError('Produto');
    }

    return ProdutoMapper.to(result);
  }
}
