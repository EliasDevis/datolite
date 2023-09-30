import { TopazDate } from "interfaces/utils/TopazDate";
import { TopazFile } from "interfaces/utils/TopazFile";

export interface TopazEnity {
    startDate: TopazDate;
    endDate: TopazDate;
    carouselImage?: TopazFile;
    stickOnCarousel: boolean;
    orderInCarousel?: number;
    id: number;
}