import { describe, expect, test } from "bun:test";
import { randomBytes, randomInt } from "crypto";
import { getDeviceMessages, registerDevice } from "index";
import { delay } from "./utils/delay";
import { generateRandomString } from "./utils/randomString";



function generateToken() {
    return generateRandomString(21)
        + ":"
        + generateRandomString(140)
}


describe("Device", async () => {
    const token = generateToken()
    const shopId = randomInt(24)

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

    await delay(1000) // Fails without waiting

    test("Get device messages", async () => {
        const messages = await getDeviceMessages(token);

        expect(messages).toBeArray()
    })
})