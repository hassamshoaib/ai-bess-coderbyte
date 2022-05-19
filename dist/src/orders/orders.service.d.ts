import { Model } from 'mongoose';
import { Order } from './orders.schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(reference: string, amount: number): Promise<any>;
}
