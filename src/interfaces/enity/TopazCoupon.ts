import { TopazFile } from "interfaces/utils/TopazFile";
import { TopazEnity } from "./TopazEntity";
import { Expose, Transform, Type } from "class-transformer";
import { TopazHtml } from "interfaces/utils/TopazHtml";

export class TopazCoupon extends TopazEnity {
    @Expose()
    title!: string;

    @Expose()
    @Type(() => TopazFile)
    @Transform(({ value }) => new TopazFile(value))
    image?: TopazFile;

    @Expose()
    producerLogo?: unknown;

    @Expose()
    details!: string;

    @Expose()
    promoTitle!: TopazHtml 

    @Expose()
    onlyForRegisteredUser!: boolean;

    @Expose()
    forCardholdersOnly!: false;

    @Expose()
    eanCode!: string 

    @Expose()
    promoSubtitle!: string;

    @Expose()
    info!: TopazHtml

    @Expose()
    note!: TopazHtml

    @Expose()
    extra!: boolean;

    @Expose()
    used?: unknown;

    @Expose()
    expire?: unknown;
}
