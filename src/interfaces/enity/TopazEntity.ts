import { Expose, Transform, Type } from "class-transformer";
import { TopazFile } from "interfaces/utils/TopazFile";

export class TopazEnity {
    @Expose()
    id!: number;

    @Expose()
    @Type(() => Date)
    startDate!: Date;

    @Expose()
    @Type(() => Date)
    endDate!: Date;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    carouselImage?: TopazFile;

    @Expose()
    stickOnCarousel!: boolean;

    @Expose()
    orderInCarousel?: number;
}