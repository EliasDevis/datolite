import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";
import { Expose, Transform, Type } from "class-transformer";

export class TopazPromo extends TopazEnity {
    @Expose()
    info!: string;
    
    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    image!: TopazFile;

    @Expose()
    @Type(() => Number)
    grossPrice!: number; // number

    @Expose()
    @Type(() => Number)
    grossDiscountPrice!: number; // number

    @Expose()
    forCardholdersOnly!: boolean;

    @Expose()
    unit!: string;

    @Expose()
    externalId?: unknown;

    @Expose()
    producerLogo?: unknown;
}
