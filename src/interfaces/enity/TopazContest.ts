import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";

export interface TopazContest extends TopazEnity {
    id: number;
    title: string;
    image: TopazFile;
    website: string; // url
    details: string; // html
}