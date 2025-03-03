import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [TypeOrmModule.forFeature([Dish])],
  exports: [TypeOrmModule]
})
export class DishesModule {}
