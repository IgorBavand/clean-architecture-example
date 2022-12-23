import { ProdutoRepository } from "@/core/produto/produto.repository";

export class ListarProdutosStory {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  execute() {
    return this.produtoRepository.findAll();
  }
}
