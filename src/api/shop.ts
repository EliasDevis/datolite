import { TopazCoupon } from "interfaces/enity/TopazCoupon"
import { TopazLeaflet } from "interfaces/enity/TopazLeaflet"
import { TopazMapShop } from "interfaces/enity/TopazMapShop"
import { TopazPromo } from "interfaces/enity/TopazPromo"
import { TopazFullShop } from "interfaces/enity/TopazFullShop"
import { Api } from "api"

export async function getShops(): Promise<TopazMapShop[]> {
    return Api.get<TopazMapShop[], { shops: TopazMapShop[] }>(
        "/shop", 
        TopazMapShop, 
        (s) => s.shops)
}

export async function getShop(id: number): Promise<TopazFullShop> {
    return Api.get("/shop/" + id, TopazFullShop)
};


export async function getShopCoupons(id: number): Promise<TopazCoupon[]> {
    return Api.get<TopazCoupon[], { coupons: TopazCoupon[] }>(
        "/coupons/shop/" + id, 
        TopazCoupon, 
        (s) => s.coupons)
}

export async function getShopPromos(id: number): Promise<TopazPromo[]> {
    return Api.get<TopazPromo[], { promos: TopazPromo[] }>(
        "/promos/shop/" + id, 
        TopazPromo, 
        (s) => s.promos)
}

export async function getShopLeaflets(id: number): Promise<TopazLeaflet[]> {
    return Api.get<TopazLeaflet[], { leaflets: TopazLeaflet[] }>(
        "/leaflet/shop/" + id, 
        TopazLeaflet,
        (s) => s.leaflets)
}