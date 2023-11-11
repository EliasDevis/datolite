import { Api } from "api";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { TopazMessage } from "interfaces/models/TopazMessage";
import { TopazRegisterOptions, TopazRegisterPayload, TopazRegisterResponse } from "interfaces/payloads/TopazRegister";

export async function registerDevice(payload: TopazRegisterOptions): Promise<void> {
    const body = plainToInstance(TopazRegisterPayload, payload)

    await Api.post(
        "/device/register", 
        instanceToPlain(body), 
        TopazRegisterResponse
    )
}

export async function getDeviceMessages(token: string): Promise<TopazMessage[]> {
    return Api.get<TopazMessage[]>("/device/messages/" + token, TopazMessage)
}