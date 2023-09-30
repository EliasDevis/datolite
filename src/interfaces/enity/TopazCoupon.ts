import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";

export interface TopazCoupon extends TopazEnity {
    title: string;
    image: TopazFile;
    producerLogo?: unknown;
    details: string;
    promoTitle: number // html-string
    onlyForRegisteredUser: boolean;
    forCardholdersOnly: false;
    eanCode: string // 

    promoSubtitle: string;
    info: string // html-like
    note: string // html-like
    extra: boolean;

    used?: unknown;
    expired?: unknown;
}

export interface TopazExtraCoupon extends TopazCoupon {
    extra: true;
}
