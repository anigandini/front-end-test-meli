export interface Author {
    "name": string,
    "lastname": string
}

export interface Item {
    "id": string,
    "title": string,
    "price": {
        "currency": string,
        "amount": number,
        "decimals": number
        
    },
    "picture": string,
    "condition": string,
    "free_shipping": boolean,
    "sold_quantity"?: number,
    "description"?: string
}
