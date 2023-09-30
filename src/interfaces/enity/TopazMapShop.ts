import { Expose, Transform, Type } from "class-transformer";
import { TopazShopFeatures } from "interfaces/TopazShopFeatures"
import { TopazPhoneNumber } from "interfaces/utils/TopazPhoneNumber"
import { TopazOpenHours } from "interfaces/utils/TopazTime"
import { toFeatures } from "transformers/toFeatures";


export class TopazMapShop {
    @Expose()
    id!: number;

    @Expose()
    lat!: number 

    @Expose()
    lng!: number 

    @Expose()
    city!: string

    @Expose()
    address!: string

    @Expose()
    type!: "TOPAZ" | "TOPAZ_EXPRESS"

    @Expose()
    @Type(() => TopazShopFeatures)
    @Transform(toFeatures)
    features!: TopazShopFeatures

    @Expose({ name: "shopOpeningHours" })
    @Type(() => TopazOpenHours)
    openingHours!: TopazOpenHours

    @Expose()
    mobile!: TopazPhoneNumber 

    @Expose()
    openNonTradingSunday!: boolean
}

