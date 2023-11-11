import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "../abstracts/TopazEntity";
import { Expose, Transform, Type } from "class-transformer";
import { TopazHtml } from "interfaces/utils/TopazHtml";

export class TopazContest extends TopazEnity {
    @Expose()
    title!: string;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    image!: TopazFile;

    @Expose()
    website!: string;

    @Expose()
    details!: TopazHtml; 
}