import { Expose, Transform, Type } from "class-transformer";
import { toOpenTime } from "transformers/toTime";

export class TopazTime {
    @Expose()
    @Type(() => Number)
    hours!: number; // 0-23

    @Expose()
    @Type(() => Number)
    minutes!: number; // 0-59
}

export class TopazOpenTime {
    @Expose()
    @Type(() => TopazTime)
    from!: TopazTime;

    @Expose()
    @Type(() => TopazTime)
    to!: TopazTime;
}



export class TopazOpenHours {
    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    monday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    tuesday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    wednesday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    thursday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    friday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    saturday!: TopazOpenTime

    @Expose()
    @Transform(toOpenTime)
    @Type(() => TopazOpenTime)
    sunday?: TopazOpenTime
}
