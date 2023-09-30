
// export interface TopazTime {
//     hours: number; // 0-23
//     minutes: number; // 0-59
// }

// export interface TopazOpenTime {
//     from: TopazTime;
//     to: TopazTime;
// }

export type TopazOpenTime = string

export interface TopazOpenHours {
    monday: TopazOpenTime,
    tuesday: TopazOpenTime,
    wednesday: TopazOpenTime,
    thursday: TopazOpenTime,
    friday: TopazOpenTime,
    saturday: TopazOpenTime,
    sunday: TopazOpenTime
}
