import { TopazShopFeatures } from "interfaces/TopazShopFeatures"
import { TopazPhoneNumber } from "interfaces/utils/TopazPhoneNumber"
import { TopazOpenHours } from "interfaces/utils/TopazTime"


export interface TopazMapShop extends TopazServerShopFeatures{ // Short version
    id: number,
    lat: number, // float
    lng: number, // float
    city: string, // "Warszawa"
    address: string,
    type: "TOPAZ" | "TOPAZ_EXPRESS",
    // features: TopazShopFeatures
    shopOpeningHours: TopazOpenHours, // shopOpeningHours
    mobile: TopazPhoneNumber, // "+48500219159"
    openNonTradingSunday: boolean,
}

type TopazServerShopFeatures = {
    [K in keyof TopazShopFeatures as `has${Capitalize<string & K>}`]: TopazShopFeatures[K];
};

