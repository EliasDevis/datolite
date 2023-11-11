import { Expose, Type } from "class-transformer";
import { TopazFile } from "interfaces/utils/TopazFile";

export class TopazBanner {
    @Expose()
    id!: number;

    @Type(() => TopazFile)
    image!: TopazFile;

    @Expose()
    url!: string;

    @Type(() => TopazFile)
    imageFile?: TopazFile;

    @Expose()
    imageParams?: unknown;
}