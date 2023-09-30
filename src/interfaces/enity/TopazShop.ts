import { TopazMix } from "interfaces/TopazMix";
import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazExtraCoupon } from "./TopazCoupon";


export interface TopazBanner {
    id: number;
    image: TopazFile;
    url: string;

    imageFile?: TopazFile;
    imageParams?: unknown;
}

export interface TopazLongShop extends TopazMix{
    banner: TopazBanner;
    carousel: TopazMix;
    couponsExtra: TopazExtraCoupon[];
    scratch: TopazScratch;

    popup?: unknown;
    shake?: unknown;
}

export interface TopazScratch {
    title: string;
    message: string;
    baner: TopazFile; // banner
}