import { Api } from "api";
import { TopazCardCredentials } from "interfaces/payloads/TopazCardCredentials";
import { Unknown } from "interfaces/utils/Unknown";

export function loginByCard({ number, pin }: TopazCardCredentials): unknown {
    return Api.get(`/card/${number}/${pin}`, Unknown)
}

export function sendEmail(email: string): unknown {
    return Api.post(`/card/sendEmail`, {
        mail: email
    }, Unknown)
}