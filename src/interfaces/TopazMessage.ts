import { Type } from "class-transformer";
import { TopazFile } from "./utils/TopazFile";

export class TopazMessage {
    id!: number;

    title!: string;

    body!: string;

    @Type(() => TopazFile)
    image!: TopazFile;

    @Type(() => Date)
    createDate!: Date; // Date

    @Type(() => Date)
    sendDate!: Date; // Date
}