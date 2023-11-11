import { Expose, Transform, Type } from "class-transformer";

export class TopazIngredient {
    @Expose()
    id!: number;

    @Expose()
    name!: string;

    @Expose()
    @Transform(({ obj }) => ({ 
        name: obj.productName, 
        amount: parseInt(obj.productAmount), 
        unit: obj.productUnit 
    }))
    @Type(() => TopazProduct)
    product!: TopazProduct;
}

export class TopazProduct {
    @Expose()
    name!: string;

    @Expose()
    amount!: number;

    @Expose()
    unit!: string;
}