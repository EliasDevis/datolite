import { Expose, Type } from "class-transformer";
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
    carouselImage?: TopazFile;

    @Expose()
    stickOnCarousel!: boolean;

    @Expose()
    orderInCarousel?: number;
}