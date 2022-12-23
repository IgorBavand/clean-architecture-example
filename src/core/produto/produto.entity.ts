import { Entity, EntityFields } from '@/core/_shared/entity';
import { ValidationError } from '../_shared/errors/validation-error';
import { Price } from '../_shared/vo/price.vo';

export interface ProdutoFields extends EntityFields {
  nome: string;
  descricao?: string;
  preco: Price;
}

export class Produto extends Entity<ProdutoFields> {
  nome: string;
  descricao?: string;
  preco: Price;

  static create(data: ProdutoFields) {
    if (data.nome.length <= 0) {
      throw new ValidationError('o nome do produto é obrigatório!!!');
    }
    return new Produto(data);
  }
}
