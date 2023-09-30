import { TopazBaseAdvice } from "./enity/TopazAdvice";
import { TopazContest } from "./enity/TopazContest";
import { TopazCoupon } from "./enity/TopazCoupon";
import { TopazLeaflet } from "./enity/TopazLeaflet";
import { TopazPromo } from "./enity/TopazPromo";

export interface TopazMix {
    coupons: TopazCoupon[];
    leaflats: TopazLeaflet[];
    promos: TopazPromo[];
    advices: TopazBaseAdvice[];
    contests: TopazContest[];
}