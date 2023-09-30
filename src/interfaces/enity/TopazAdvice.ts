import { TopazDate } from "interfaces/utils/TopazDate";
import { TopazFile } from "interfaces/utils/TopazFile";

export interface TopazBaseAdvice {
    id: number;
    title: string;
    teaser: string; // html
    image: TopazFile;
    stickOnCarousel: boolean;
    showOnlyInCarousel: boolean;
    adviceType: TopazAdviceType;
    content: string;
    orderInCarousel: number;
    carouselImage: TopazFile;
    ingredients: TopazIngredient[];
    createDate: TopazDate;
}

export interface TopazAdviceType {
    id: number;
    name: string;
}

export type TopazArticle = TopazBaseAdvice & {
    adviceType: {
        id: 2,
        name: "Artykuł"
    }
}

export type TopazAdvice = TopazBaseAdvice & {
    adviceType: {
        id: 1,
        name: "Przepis"
    }
}

export interface TopazIngredient {
    id: number;
    name: string;
    // product: {
    //     name: string;
    //     amount: number;
    //     unit: string;
    // }
    productName: string;
    productAmount: number;
    productUnit: string;
}