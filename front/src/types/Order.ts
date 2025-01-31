export interface Order {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products: {
        _id: string;
        quantity: number;
        product: {
            name: string;
            imagePath: string;
            price: number;
        };
        name: string;
        price: number;
        flavor: string;
        complement: string;
        qtd: number;
    }[];
}
