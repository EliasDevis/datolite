import { loginByCard, sendEmail } from "api/auth";
import { describe, test } from "bun:test";
import { TopazCardCredentials } from "interfaces/payloads/TopazCardCredentials";


describe("Auth", () => {
    const credentials: TopazCardCredentials = {
        number: "1234567",
        pin: "12345"
    }
    const email = "user@example.com"

    test("Login By Card", () => {
        const res = loginByCard(credentials)

        console.log(res)
    })

    test("Sent Reset Password Email", () => {
        const res = sendEmail(email)

        console.log(res)
    })
})