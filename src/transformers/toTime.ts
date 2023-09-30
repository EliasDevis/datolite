export function toOpenTime({ value }: { value: string }){
    if (value === "") return null;
    
    const [fromHours, fromMinutes, toHours, toMinutes] = value
        .split("-")
        .flatMap((v) => v.split(":"))

    return ({
        from: {
            hours: +fromHours,
            minutes: +fromMinutes,
        },
        to: {
            hours: +toHours,
            minutes: +toMinutes
        }
    })
}
