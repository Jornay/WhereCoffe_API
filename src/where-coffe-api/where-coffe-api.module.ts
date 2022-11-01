import { Module } from '@nestjs/common';
import { WhereCoffeApiService } from './where-coffe-api.service';
import { WhereCoffeApiController } from './where-coffe-api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WhereCoffee, WhereCoffeeSchema } from './entities/where-coffe-api.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: WhereCoffee.name, schema: WhereCoffeeSchema }])],
  controllers: [WhereCoffeApiController],
  providers: [WhereCoffeApiService]
})
export class WhereCoffeApiModule {}
