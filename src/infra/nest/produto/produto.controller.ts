import { AtualizarProdutoStory } from '@/application/produto/story/atualizar-produto.story';
import { CriarProdutoStory } from '@/application/produto/story/criar-produto.story';
import { DeletarProdutoStory } from '@/application/produto/story/deletar-produto.story';
import { ListarProdutosStory } from '@/application/produto/story/listar-produtos.story';
import { Id } from '@/core/_shared/vo/id.vo';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutoController {
  constructor(
    private readonly listar: ListarProdutosStory,
    private readonly criar: CriarProdutoStory,
    private readonly atualizar: AtualizarProdutoStory,
    private readonly deletar: DeletarProdutoStory,
  ) {}

  @Get()
  async findAll() {
    return this.listar.execute();
  }

  @Post()
  async create(@Body() data) {
    return this.criar.execute(data);
  }

  @Patch(':id')
  async update(@Body() data, @Param('id') id) {
    return this.atualizar.execute({ id: id, ...data });
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.deletar.execute(id);
  }
}
