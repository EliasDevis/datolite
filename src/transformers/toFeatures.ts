import { TransformFnParams } from "class-transformer"

export function toFeatures({ obj }: TransformFnParams) {
    const prefix = "has"

    const mappedObj = Object.entries(obj)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) =>
            [`${key[prefix.length].toLowerCase()}${key.slice(prefix.length + 1)}`, value])

    return Object.fromEntries(mappedObj)
}