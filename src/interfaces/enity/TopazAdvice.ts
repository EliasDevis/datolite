import { Expose, Transform, Type } from "class-transformer";
import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazAdviceType as TopazAdviceType } from "./TopazAdviceType";
import { TopazHtml } from "interfaces/utils/TopazHtml";


export class TopazAdvice {
    @Expose()
    id!: number;

    @Expose()
    title!: string;

    @Expose()
    teaser!: TopazHtml;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    image!: TopazFile;

    @Expose()
    stickOnCarousel!: boolean;

    @Expose()
    showOnlyInCarousel!: boolean;

    @Expose()
    @Type(() => TopazAdviceType)
    adviceType!: TopazAdviceType;

    @Expose()
    content!: string;

    @Expose()
    orderInCarousel!: number;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => value ? new TopazFile(value) : null)
    carouselImage?: TopazFile;

    @Expose()
    @Type(() => TopazIngredient)
    ingredients!: TopazIngredient[];

    @Expose()
    @Type(() => Date)
    createDate!: Date;
}

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