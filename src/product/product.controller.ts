import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {
    constructor(private prodictService: ProductService){}

    @Get('frontend')
    async frontend() {
        return this.prodictService.all();
    }

    @Get('backend')
    async backend() {
        const builder = await this.prodictService.queryBuilder('products')
        return await builder.getMany()
    }
}
