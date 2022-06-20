type Author = {
    "name": string,
    "lastname": string
}

type Item = {
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

const itemSerializer = (data: any) => {
    const serializedItem: Item = {
        'id': data.id,
        'title': data.title,
        "price": {
            "currency": data.currency_id,
            "amount": parseInt(data.price.toString().split('.')[0]),
            "decimals": data.price.toString().split('.')[1] ? parseInt(data.price.toString().split('.')[1]) : 0
        },
        "picture": data.thumbnail,
        "condition": data.condition,
        "free_shipping": data.shipping.free_shipping,  
    }
    data.sold_quantity ? serializedItem.sold_quantity = data.sold_quantity : ''
    data.description ? serializedItem.description = data.description : ''
    return serializedItem
}

module.exports = {
    'responseSerializer': function (responseType: 'product'|'search', data: any, categories: string[] | null) {
        const author : Author = {name: 'Anahí', lastname: 'Gandini Krasñansky'}
        if (responseType === 'search') {
            const items : Item[]= []
            data.forEach(item =>  {items.push(itemSerializer(item))})
            return {'author': author, categories: categories, 'items': items}
        } else {
            const item: Item = itemSerializer(data)
            return {'author': author, categories: categories, 'item': item}
        }
    }
}