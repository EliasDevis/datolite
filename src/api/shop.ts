import { TopazCoupon } from "interfaces/enity/TopazCoupon"
import { TopazLeaflet } from "interfaces/enity/TopazLeaflet"
import { TopazMapShop } from "interfaces/enity/TopazMapShop"
import { TopazPromo } from "interfaces/enity/TopazPromo"
import { TopazLongShop } from "interfaces/enity/TopazShop"
import { api } from "api"

export async function getAllShops(): Promise<TopazMapShop[]> {
    return api.get<TopazMapShop[]>("/shop")
}

export async function getShop(id: number): Promise<TopazLongShop> {
    return api.get<TopazLongShop>("/shop/" + id)
};


export async function getShopCoupons(id: number): Promise<TopazCoupon[]> {
    return api.get<TopazCoupon[]>("/api/coupons/shop/" + id)
}

export async function getShopPromos(id: number): Promise<TopazPromo[]> {
    return api.get<TopazPromo[]>("/api/promos/shop/" + id)
}

export async function getShopLeaflets(id: number): Promise<TopazLeaflet[]> {
    return api.get<TopazLeaflet[]>("/api/leaflets/shop/" + id)
}