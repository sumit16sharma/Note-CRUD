import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { NoteModule } from './note/note.module';
import { Note } from './note/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sumit',
      password: '123456',
      database: 'nestjs',
      entities: [Product, Note],
      synchronize: true,
    }),
    ProductModule,
    NoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
