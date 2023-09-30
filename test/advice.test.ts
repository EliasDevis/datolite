import { expect, test, describe } from "bun:test";
import { getAdvice, getAdvices, getArticles } from "index";
import { TopazAdvice } from "interfaces/enity/TopazAdvice";

describe("Advice", () => {
    test("Get Advice", async () => {
        const testAdviceId = 345
        const res = await getAdvice(testAdviceId)

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