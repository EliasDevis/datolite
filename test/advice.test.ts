import { expect, test, describe } from "bun:test";
import { randomInt } from "crypto";
import { getAdvice, getAdvices, getArticles } from "index";
import { TopazAdvice } from "interfaces/enity/TopazAdvice";

describe("Advice", () => {
    test("Get Advice", async () => {
        const adviceId = randomInt(1000)
        const res = await getAdvice(adviceId)

        expect(res).toBeInstanceOf(TopazAdvice);
    });

    test("Get Advices", async () => {
        const res = await getAdvices()

        expect(res).toBeArray()
    });

    test("Get Articles", async () => {
        const res = await getArticles()

        expect(res).toBeArray()
    });
});