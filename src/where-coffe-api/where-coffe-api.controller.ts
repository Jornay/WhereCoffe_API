import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhereCoffeApiService } from './where-coffe-api.service';
import { CreateWhereCoffeApiDto } from './dto/create-where-coffe-api.dto';
import { UpdateWhereCoffeApiDto } from './dto/update-where-coffe-api.dto';

@Controller('wherecoffeapi')
export class WhereCoffeApiController {
  constructor(private readonly whereCoffeApiService: WhereCoffeApiService) {}

  @Post()
  create(@Body() createWhereCoffeApiDto: CreateWhereCoffeApiDto) {
    return this.whereCoffeApiService.create(createWhereCoffeApiDto);
  }

  @Get('')
  findAll() {
    return this.whereCoffeApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whereCoffeApiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhereCoffeApiDto: UpdateWhereCoffeApiDto) {
    return this.whereCoffeApiService.update(id, updateWhereCoffeApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whereCoffeApiService.remove(id);
  }
}
