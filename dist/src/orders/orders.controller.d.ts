import { OrdersService } from './orders.service';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    addOrder(reference: string, amount: number): Promise<any>;
}
