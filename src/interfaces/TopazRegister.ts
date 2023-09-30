

export interface TopazRegisterPayload {
    token: string,
    shop_id: number, // shop_id
    of_legal_age: boolean, // of_legal_age
    cardholder: boolean,
    type: 1 | 0;
}

export interface TopazRegisterResponse {
    status: boolean,
    message: string;
}