import { api } from "api";
import { TopazAdvice, TopazArticle, TopazBaseAdvice } from "interfaces/enity/TopazAdvice";

export async function getAdvice(id: number): Promise<TopazBaseAdvice> {
    return api.get<TopazBaseAdvice>("/advices/" + id)
}

export async function getArticles(): Promise<TopazArticle[]> {
    return api.get<TopazArticle[]>("advices/type/article")
}

export async function getAdvices(): Promise<TopazAdvice[]> {
    return api.get<TopazAdvice[]>("advices/type/advice")
}
