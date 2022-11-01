import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WhereCoffeeDocuments = WhereCoffee & Document;

@Schema()
export class WhereCoffee {
    @Prop()
    coffeShopName: string;
    @Prop()
    CNPJ: string;
    @Prop()
    country: string;
    @Prop()
    district: string;
    @Prop()
    UF: string;
    @Prop()
    street: string;
    @Prop()
    CEP: string;
    @Prop()
    shopNumber: number;
    @Prop()
    category: string;
    @Prop()
    serviceHour: string;
}

export const WhereCoffeeSchema = SchemaFactory.createForClass(WhereCoffee);