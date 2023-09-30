import { Expose } from "class-transformer";


export interface TopazRegisterOptions {
    token: string
    shopId: number // shop_id
    ofLegalAge: boolean // of_legal_age
    cardholder: boolean
    type: 1 | 0;
}

export class TopazRegisterPayload implements TopazRegisterOptions{
    @Expose()
    token!: string;

    @Expose({ name: "shop_id", toPlainOnly: true })
    shopId!: number

    @Expose({ name: "of_legal_age", toPlainOnly: true })
    ofLegalAge!: boolean

    @Expose()
    cardholder!: boolean

    @Expose()
    type!: 1 | 0;
    
}

export class TopazRegisterResponse {
    @Expose()
    status!: boolean

    @Expose()
    message!: string;
}