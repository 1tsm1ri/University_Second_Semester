import { Module } from '@nestjs/common';
import { TerribleLloremosService } from './terrible-lloremos.service';
import { TerribleLloremosController } from './terrible-lloremos.controller';

@Module({
  controllers: [TerribleLloremosController],
  providers: [TerribleLloremosService],
})
export class TerribleLloremosModule {}
