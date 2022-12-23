import { Produto } from './produto.entity';

export interface ProdutoRepository {
  /**
   * cria um novo produto
   * @param produto produto a ser criado
   */
  create(produto: Produto): Promise<Produto>;

  /**
   * atualiza produto
   * @param produto produto atualizado
   */
  update(produto: Produto): Promise<Produto>;

  /**
   * deleta produto
   * @param produto produto deletado
   */
  delete(produto: Produto): Promise<void>;

  /**
   * todos os produtos
   */
  findAll(): Promise<Produto[]>;

  /**
   * busca um produto atraves do id
   * @param id id do produto
   * @throws {Error} se produto nao existir
   */
  findByIdOrFail(id: Produto['id']): Promise<Produto>;
}

export abstract class ProdutoRepository {}
