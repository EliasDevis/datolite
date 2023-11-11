import { plainToInstance } from "class-transformer"
import { UnknownError } from "errors/UknownError";


type Unboxed<T> =
    T extends (infer U)[]
        ? U
        : T;


export class Api {
    static url = "https://apk.topaz24.pl/api"

    static async get<T, S = T>(
        url: string,
        type: { new(): Unboxed<T> },
        change?: (serverData: S) => T): Promise<T> {

        const response = await fetch(`${Api.url}${url}`)
            .then(r => r.status !== 200 ? (() => { throw new UnknownError() })() : r)
            .then(r => r.json() as S)
            .then(r => change ? change(r) : r)



        const instance = plainToInstance(type, response, { excludeExtraneousValues: true })

        return instance as T
    }

    static async post<T>(
        url: string,
        body: Record<string, any>,
        type: { new(): T }): Promise<T> {

        const params = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`${Api.url}${url}`, params)
            .then(r => r.status !== 200 ? (() => { throw new UnknownError() })() : r)
            .then(r => r.json())
            // .then(r => r === null ? (() => { throw new UnknownError() })() : r)

        const instance = plainToInstance(type, response, { excludeExtraneousValues: true })

        return instance
    }
}