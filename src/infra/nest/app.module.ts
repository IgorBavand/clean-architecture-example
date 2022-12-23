import { Module, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { prisma } from '../prisma';
import { ProdutoModule } from './produto/produto.module';

@Global()
@Module({
  imports: [ProdutoModule],
  controllers: [],
  providers: [
    {
      provide: PrismaClient,
      useValue: prisma,
    },
  ],
  exports: [PrismaClient],
})
export class AppModule {}
