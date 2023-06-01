import { IProduct } from "./product";

export interface IOrder {
    id?: string;
    items: IProduct[];
    totalPrice: number;
    paymentMode: string;
    orderedOn: string;
    status: string;
}