import { plainToClass, plainToInstance } from "class-transformer"
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
            .then(r => r.json() as S)
            .then(r => change ? change(r) : r)

        // console.log(response)


        const instance = plainToInstance(type, response, { excludeExtraneousValues: true })
        
        return instance as T
    }
    static post<T>(url: string, body: Record<string, any>, type: { new(): T }): Promise<T> {
        return fetch(`${Api.url}${url}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(r => r.json())
            .then(r => plainToInstance(type, r))

    }
}