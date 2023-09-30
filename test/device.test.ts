import { describe, expect, test } from "bun:test";
import { randomBytes } from "crypto";
import { getDeviceMessages, registerDevice } from "index";

describe("Device", () => {
    const token = randomBytes(64).toString("hex")
    const shopId = 15

    test("Register device", async () => {
        const promise = registerDevice({
            token,
            shopId,
            ofLegalAge: false,
            cardholder: false,
            type: 0
        })

        expect(promise).resolves.toBeEmpty()
    })

    test("Get device messages", async () => {
        const messages = await getDeviceMessages(token);

        expect(messages).toBeArray()
    })
})