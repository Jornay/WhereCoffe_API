import { PartialType } from '@nestjs/mapped-types';
import { CreateWhereCoffeApiDto } from './create-where-coffe-api.dto';

export class UpdateWhereCoffeApiDto extends PartialType(CreateWhereCoffeApiDto) {}
