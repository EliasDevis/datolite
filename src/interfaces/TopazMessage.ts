import { Expose, Transform, Type } from "class-transformer";
import { TopazFile } from "./utils/TopazFile";

export class TopazMessage {
    @Expose()
    id!: number;

    @Expose()
    title!: string;

    @Expose()
    body!: string;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    image!: TopazFile;

    @Expose()
    @Type(() => Date)
    createDate!: Date;

    @Expose()
    @Type(() => Date)
    sendDate!: Date;
}