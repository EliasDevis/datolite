import { TopazEnity } from "./TopazEntity";

export interface TopazPromo extends TopazEnity {
    info: string;
    image: File;
    grossPrice: string; // number
    grossDiscountPrice: string; // number
    forCardholdersOnly: boolean;
    unit: string;

    externalId?: unknown;
    producerLogo?: unknown;
}
