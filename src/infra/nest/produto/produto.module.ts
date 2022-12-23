import { AtualizarProdutoStory } from '@/application/produto/story/atualizar-produto.story';
import { CriarProdutoStory } from '@/application/produto/story/criar-produto.story';
import { DeletarProdutoStory } from '@/application/produto/story/deletar-produto.story';
import { ListarProdutosStory } from '@/application/produto/story/listar-produtos.story';
import { ProdutoRepository } from '@/core/produto/produto.repository';
import { PrismaProdutoRepository } from '@/infra/prisma/produto/produto.repository';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProdutoController } from './produto.controller';

@Module({
  controllers: [ProdutoController],
  providers: [
    {
      provide: ProdutoRepository,
      useFactory: (prisma) => new PrismaProdutoRepository(prisma),
      inject: [PrismaClient],
    },
    {
      provide: CriarProdutoStory,
      useFactory: (repo) => new CriarProdutoStory(repo),
      inject: [ProdutoRepository],
    },
    {
      provide: AtualizarProdutoStory,
      useFactory: (repo) => new AtualizarProdutoStory(repo),
      inject: [ProdutoRepository],
    },
    {
      provide: DeletarProdutoStory,
      useFactory: (repo) => new DeletarProdutoStory(repo),
      inject: [ProdutoRepository],
    },
    {
      provide: ListarProdutosStory,
      useFactory: (repo) => new ListarProdutosStory(repo),
      inject: [ProdutoRepository],
    },
  ],
  exports: [
    ProdutoRepository,
    AtualizarProdutoStory,
    CriarProdutoStory,
    DeletarProdutoStory,
    ListarProdutosStory,
  ],
})
export class ProdutoModule {}
