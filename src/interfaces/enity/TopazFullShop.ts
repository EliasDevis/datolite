import { Expose, Type } from "class-transformer";
import { TopazMix } from "interfaces/TopazMix";
import { TopazCoupon } from "./TopazCoupon";
import { TopazBanner } from "./TopazBanner";
import { TopazScratch } from "./TopazScratch";




export class TopazFullShop extends TopazMix {
    @Expose()
    @Type(() => TopazBanner)
    banner!: TopazBanner;

    @Expose()
    @Type(() => TopazMix)
    carousel!: TopazMix;

    @Expose()
    @Type(() => TopazCoupon)
    couponsExtra!: TopazCoupon[];

    @Expose()
    @Type(() => TopazScratch)
    scratch!: TopazScratch;

    @Expose()
    popup?: unknown;

    @Expose()
    shake?: unknown;
}