import { Produto } from '@/core/produto/produto.entity';
import { ProdutoRepository } from '@/core/produto/produto.repository';
import { Price } from '@/core/_shared/vo/price.vo';

export interface CriarProdutoStoryInput {
  nome: string;
  descricao?: string;
  preco: number;
}

export class CriarProdutoStory {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async execute(input: CriarProdutoStoryInput) {
    const produto = Produto.create({
      nome: input.nome,
      descricao: input.descricao,
      preco: Price.of(input.preco),
    });
    return this.produtoRepository.create(produto);
  }
}
