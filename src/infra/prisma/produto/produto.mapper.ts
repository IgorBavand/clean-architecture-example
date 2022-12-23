import { Produto } from '@/core/produto/produto.entity';
import { UUID4 } from '@/core/_shared/vo/uuid4.vo';
import { Price } from '@/core/_shared/vo/price.vo';
import { Produto as ProdutoEntity } from '@prisma/client';

export class ProdutoMapper {
  static to(data: ProdutoEntity) {
    return Produto.create({
      id: UUID4.of(data.id),
      nome: data.nome,
      descricao: data.descricao ?? undefined,
      preco: Price.of(data.preco),
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }

  static from(entity: Produto): ProdutoEntity {
    return {
      id: entity.id.value,
      nome: entity.nome,
      descricao: entity.descricao ?? null,
      preco: entity.preco.value,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
