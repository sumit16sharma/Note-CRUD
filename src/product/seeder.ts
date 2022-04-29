import { TypeOrmModule } from "@nestjs/typeorm";
import { seeder } from "nestjs-seeder";
import { Product } from "./product.entity";
import { ProductSeeder } from "./product.seeder";

seeder({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'sumit',
            password: '123456',
            database: 'nestjs',
            entities: [Product],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Product])
    ]
}).run([ProductSeeder])