import { ApiProperty } from "@nestjs/swagger";
import { WhereCoffee, WhereCoffeeSchema } from "./entities/where-coffe-api.entity"

export class WhereCoffeeProxy {
    constructor(entity: WhereCoffee) {
        this.coffeShopName= entity.coffeShopName;
        this.CNPJ= entity.CNPJ;
        this.country= entity.country;
        this.district= entity.district;
        this.UF= entity.UF;
        this.street= entity.street;
        this.CEP= entity.CEP;
        this.shopNumber= entity.shopNumber;
        this.category= entity.category;
        this.serviceHour= entity.serviceHour;

    }
    @ApiProperty()
    coffeShopName: string;
    @ApiProperty()
    CNPJ: string;
    @ApiProperty()
    country: string;
    @ApiProperty()
    district: string;
    @ApiProperty()
    UF: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    CEP: string;
    @ApiProperty()
    shopNumber: number;
    @ApiProperty()
    category: string;
    @ApiProperty()
    serviceHour: string;
}