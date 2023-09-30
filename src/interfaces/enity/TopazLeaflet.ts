import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";

export interface TopazLeaflet extends TopazEnity {
    name: string;
    type: "THEMATIC";
    filePdf: TopazFile;
    cover: TopazFile;
    orderInApi: number;
}