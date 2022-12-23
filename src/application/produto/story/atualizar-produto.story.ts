import { ProdutoRepository } from "@/core/produto/produto.repository";
import { Price } from "@/core/_shared/vo/price.vo";
import { UUID4 } from "@/core/_shared/vo/uuid4.vo";
import { prependListener } from "process";

export interface AtualizarProdutoStoryInput {
  id: string;
  nome?: string;
  descricao?: string;
  preco?: number;
}

export class AtualizarProdutoStory {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async execute(input: AtualizarProdutoStoryInput) {
    const produto = await this.produtoRepository.findByIdOrFail(
      UUID4.of(input.id)
    );
    produto.assign({
      nome: input.nome,
      descricao: input.descricao,
      preco: input.preco ? Price.of(input.preco) : undefined,
    });
    return this.produtoRepository.update(produto);
  }
}
