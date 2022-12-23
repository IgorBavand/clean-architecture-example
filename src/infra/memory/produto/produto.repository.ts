import { Produto } from '@/core/produto/produto.entity';
import { ProdutoRepository } from '@/core/produto/produto.repository';
import { ValidationError } from '@/core/_shared/errors/validation-error';
import { Id } from '@/core/_shared/vo/id.vo';

export class InMemoryProdutoRepository implements ProdutoRepository {
  data = new Map<string, Produto>();

  async create(produto: Produto): Promise<Produto> {
    this.data.set(produto.id.value, produto);
    return produto;
  }
  async update(produto: Produto): Promise<Produto> {
    this.data.set(produto.id.value, produto);
    return produto;
  }
  async delete(produto: Produto): Promise<void> {
    this.data.delete(produto.id.value);
  }
  async findAll(): Promise<Produto[]> {
    return Array.from(this.data.values());
  }
  async findByIdOrFail(id: Id<any>): Promise<Produto> {
    const produto = this.data.get(id.value);

    if (!produto) {
      throw new ValidationError('Produto nao encontrado');
    }
    return produto;
  }
}
