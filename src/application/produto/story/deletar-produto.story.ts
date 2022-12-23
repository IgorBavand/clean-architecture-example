import { ProdutoRepository } from "@/core/produto/produto.repository";
import { Id } from "@/core/_shared/vo/id.vo";
import { UUID4 } from "@/core/_shared/vo/uuid4.vo";

export class DeletarProdutoStory {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async execute(id: string) {
    const produto = await this.produtoRepository.findByIdOrFail(UUID4.of(id));

    await this.produtoRepository.delete(produto);
  }
}
