import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhereCoffeApiService } from './where-coffe-api.service';
import { CreateWhereCoffeApiDto } from './dto/create-where-coffe-api.dto';
import { UpdateWhereCoffeApiDto } from './dto/update-where-coffe-api.dto';
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { WhereCoffeeProxy } from './where-coffe-api-module.proxy';

@Controller('wherecoffeapi')
@ApiTags('wherecoffeapi')
export class WhereCoffeApiController {
  constructor(private readonly whereCoffeApiService: WhereCoffeApiService) {}

  @Post('')
  @ApiOkResponse({ type: WhereCoffeeProxy})
  @ApiOperation({ summary: 'Faz o salvamento dos dados referente ao cadastro das cafeterias.'})
  create(@Body() createWhereCoffeApiDto: CreateWhereCoffeApiDto) {
    return this.whereCoffeApiService.create(createWhereCoffeApiDto);
  }

  @Get('/list')
  @ApiOkResponse({ type: WhereCoffeeProxy, isArray: true})
  @ApiOperation({ summary: 'Retorna os dados referente a todas as cafeterias'})
  findAll() {
    return this.whereCoffeApiService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: WhereCoffeeProxy, isArray: true})
  @ApiOperation({ summary: 'Retorna os dados de uma cafeteria em específico'})
  findOne(@Param('id') id: string) {
    return this.whereCoffeApiService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WhereCoffeeProxy, isArray: true})
  @ApiOperation({ summary: 'Atualiza os dados de uma cafeteria em específico'})
  update(@Param('id') id: string, @Body() updateWhereCoffeApiDto: UpdateWhereCoffeApiDto) {
    return this.whereCoffeApiService.update(id, updateWhereCoffeApiDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma cafeteria pela identificação.'})
  remove(@Param('id') id: string) {
    return this.whereCoffeApiService.remove(id);
  }
}
