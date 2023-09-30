export const api = {
    url: "https://apk.topaz24.pl/api",
    get<T>(url: string): Promise<T> {
        return fetch(`${this.url}${url}`).then(r => r.json())
    },
    post<T>(url: string, body: Record<string, any>): Promise<T> {
        return fetch(`${this.url}${url}`, {
            body: JSON.stringify(body)
        }).then(r => r.json())
    }
}