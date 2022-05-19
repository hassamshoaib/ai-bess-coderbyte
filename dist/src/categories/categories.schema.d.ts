/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type CategoryDocument = Category & Document;
export declare class Category {
    id: string;
    title: string;
    discount: number;
    parentCategoryReference: string;
}
export declare const CategorySchema: import("mongoose").Schema<Document<Category, any, any>, import("mongoose").Model<Document<Category, any, any>, any, any, any>, {}, {}>;
