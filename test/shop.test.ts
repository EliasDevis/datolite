

import { expect, test, describe } from "bun:test";
import { randomInt } from "crypto";
import { getShops, getShop, getShopCoupons, getShopLeaflets, getShopPromos } from "index";
import { TopazFullShop } from "interfaces/enity/TopazFullShop";


describe("Shop", () => {
    const testShopId = randomInt(100)

    test("Get shop", async () => {
        const res = await getShop(testShopId)

        expect(res).toBeInstanceOf(TopazFullShop);
    });

    test("Get Shops", async () => {
        const res = await getShops()

        expect(res).toBeArray()
    });

    test("Get Shop Coupons", async () => {
        const res = await getShopCoupons(testShopId)

        expect(res).toBeArray()
    });

    test("Get Shop Leaflets", async () => {
        const res = await getShopLeaflets(testShopId)

        expect(res).toBeArray()
    });


    test("Get Shop Promos", async () => {
        const res = await getShopPromos(testShopId)

        expect(res).toBeArray()
    });
});