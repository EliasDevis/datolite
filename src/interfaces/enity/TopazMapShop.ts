import { Expose, Transform, Type } from "class-transformer";
import { TopazShopFeatures } from "interfaces/TopazShopFeatures"
import { TopazPhoneNumber } from "interfaces/utils/TopazPhoneNumber"
import { TopazOpenHours } from "interfaces/utils/TopazTime"
import { toFeatures } from "transformers/toFeatures";


export class TopazMapShop {
    @Expose()
    id!: number;

    @Expose()
    lat!: number // float

    @Expose()
    lng!: number // float

    @Expose()
    city!: string // "Warszawa"

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
    mobile!: TopazPhoneNumber // "+48500219159"

    @Expose()
    openNonTradingSunday!: boolean
}

