import { Expose, Transform, Type } from "class-transformer";
import { toOpenTime } from "transformers/toTime";

export class TopazTime {
    @Expose()
    @Type(() => Number)
    hours!: number;

    @Expose()
    @Type(() => Number)
    minutes!: number; 

    toString() {
        return `${this.hours}:${this.minutes}`
    }
}

export class TopazOpenTime {
    @Expose()
    @Type(() => TopazTime)
    from!: TopazTime;

    @Expose()
    @Type(() => TopazTime)
    to!: TopazTime;

    toString() {
        return this.from.toString() + "-" + this.to.toString()
    }
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
