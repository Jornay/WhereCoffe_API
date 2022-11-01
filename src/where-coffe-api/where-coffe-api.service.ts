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
    const coffees = new this.whereCoffeeModel(createWhereCoffeApiDto)
    return coffees.save();
  }

  findAll() {
    return this.whereCoffeeModel.find();
  }

  findOne(id: string) {
    return this.whereCoffeeModel.findById(id)
  }

  update(id: string, updateWhereCoffeApiDto: UpdateWhereCoffeApiDto) {
    return this.whereCoffeeModel.findByIdAndUpdate({
      _id : id
    },{
      updateWhereCoffeApiDto
    },
    {
      new: true,
    });
  }

  remove(id: string) {
    return this.whereCoffeeModel.deleteOne({
      _id: id,
    })
    .exec();
  }
}
