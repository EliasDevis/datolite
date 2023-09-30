import { Expose, Type } from "class-transformer";
import { TopazFile } from "interfaces/utils/TopazFile";

export class TopazScratch {
    @Expose()
    title!: string;

    @Expose()
    message!: string;

    @Type(() => TopazFile)
    @Expose(({ name: "baner", toClassOnly: true }))
    banner!: TopazFile; 
}