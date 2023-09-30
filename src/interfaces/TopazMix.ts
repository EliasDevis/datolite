import { Expose, Type } from "class-transformer";
import { TopazAdvice } from "./enity/TopazAdvice";
import { TopazContest } from "./enity/TopazContest";
import { TopazCoupon } from "./enity/TopazCoupon";
import { TopazLeaflet } from "./enity/TopazLeaflet";
import { TopazPromo } from "./enity/TopazPromo";

export abstract class TopazMix {
    @Expose()
    @Type(() => TopazCoupon)
    coupons!: TopazCoupon[];

    @Expose()
    @Type(() => TopazLeaflet)
    leaflets!: TopazLeaflet[];

    @Expose()
    @Type(() => TopazPromo)
    promos!: TopazPromo[];

    @Expose()
    @Type(() => TopazAdvice)
    advices!: TopazAdvice[];

    @Expose()
    @Type(() => TopazContest)
    contests!: TopazContest[];
}