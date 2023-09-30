import { TopazDate } from "./utils/TopazDate";
import { TopazFile } from "./utils/TopazFile";

export interface TopazMessage {
    id: number;
    title: string;
    body: string;
    image: TopazFile;

    createDate: TopazDate; // Date
    sendDate: TopazDate; // Date
}