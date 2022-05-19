/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export declare class Order {
    reference: string;
    amount: number;
}
export declare const OrderSchema: import("mongoose").Schema<import("mongoose").Document<Order, any, any>, import("mongoose").Model<import("mongoose").Document<Order, any, any>, any, any, any>, {}, {}>;
