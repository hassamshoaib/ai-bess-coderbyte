import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  discount: number;

  @Prop()
  price: number;

  @Prop()
  categoryReference: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
