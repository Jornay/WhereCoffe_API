import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWhereCoffeApiDto } from './dto/create-where-coffe-api.dto';
import { UpdateWhereCoffeApiDto } from './dto/update-where-coffe-api.dto';
import { WhereCoffee, WhereCoffeeDocuments } from './entities/where-coffe-api.entity';

@Injectable()
export class WhereCoffeApiService {

  constructor(@InjectModel(WhereCoffee.name) private whereCoffeeModel: Model<WhereCoffeeDocuments>) {}

  create(createWhereCoffeApiDto: CreateWhereCoffeApiDto) {
    const user = new this.whereCoffeeModel(createWhereCoffeApiDto)
    return user.save();
  }

  findAll() {
    return `This action returns all whereCoffeApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whereCoffeApi`;
  }

  update(id: number, updateWhereCoffeApiDto: UpdateWhereCoffeApiDto) {
    return `This action updates a #${id} whereCoffeApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} whereCoffeApi`;
  }
}
