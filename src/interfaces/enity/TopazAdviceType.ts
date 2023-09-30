import { Expose } from "class-transformer";

export class TopazAdviceType {
    @Expose()
    id!: number;

    @Expose()
    name!: string;
}