import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";
import { Expose, Transform, Type } from "class-transformer";

export class TopazLeaflet extends TopazEnity {
    @Expose()
    name!: string;

    @Expose()
    type!: "THEMATIC";
    
    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    filePdf!: TopazFile;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    cover!: TopazFile;

    @Expose()
    orderInApi!: number;
}