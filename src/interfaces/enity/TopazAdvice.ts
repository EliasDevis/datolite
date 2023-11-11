import { Expose, Transform, Type } from "class-transformer";
import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazAdviceType } from "interfaces/models/TopazAdviceType";
import { TopazHtml } from "interfaces/utils/TopazHtml";
import { TopazIngredient } from "../models/TopazIngredient";


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
    content!: TopazHtml;

    @Expose()
    orderInCarousel!: number;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    carouselImage?: TopazFile;

    @Expose()
    @Type(() => TopazIngredient)
    ingredients!: TopazIngredient[];

    @Expose()
    @Type(() => Date)
    createDate!: Date;
}