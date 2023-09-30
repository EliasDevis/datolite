import { Api } from "api";
import { TopazAdvice } from "interfaces/enity/TopazAdvice";

export async function getAdvice(id: number): Promise<TopazAdvice> {
    return Api.get("/advices/" + id, TopazAdvice)
}

export async function getArticles(): Promise<TopazAdvice[]> {
    return Api.get<TopazAdvice[]>("/advices/type/article", TopazAdvice)
}

export async function getAdvices(): Promise<TopazAdvice[]> {
    return Api.get<TopazAdvice[]>("/advices/type/advice", TopazAdvice)
}
