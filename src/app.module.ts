import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhereCoffeApiModule } from './where-coffe-api/where-coffe-api.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://eng_soft:12345678910@wherecoffebd.zgrs6ae.mongodb.net/WhereCoffe?retryWrites=true&w=majority'), WhereCoffeApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
