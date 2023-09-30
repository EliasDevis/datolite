import { api } from "api";
import { TopazMessage } from "interfaces/TopazMessage";
import { TopazRegisterPayload, TopazRegisterResponse } from "interfaces/TopazRegister";

export async function registerDevice(payload: TopazRegisterPayload): Promise<void> {
    const response = await api.post<TopazRegisterResponse>("/device/register", payload)

    if (!response.status) throw new Error("Bad status")
}

export async function getDeviceMessages(token: string): Promise<TopazMessage[]> {
    return api.get<TopazMessage[]>("/device/messages/" + token)
}