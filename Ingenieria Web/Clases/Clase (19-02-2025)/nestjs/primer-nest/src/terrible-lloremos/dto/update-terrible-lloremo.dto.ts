import { PartialType } from '@nestjs/mapped-types';
import { CreateTerribleLloremoDto } from './create-terrible-lloremo.dto';

export class UpdateTerribleLloremoDto extends PartialType(CreateTerribleLloremoDto) {}
