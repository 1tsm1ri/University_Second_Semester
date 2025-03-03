import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async create(createDishDto: CreateDishDto) {
    const newDish = this.dishRepository.create(createDishDto);
    await this.dishRepository.save(newDish);
    return newDish;
    }


    return createDishDto;
  }

  findAll() {

  }

  findOne(id: string) {

    }
    return dish;
  }

  update(id: number, updateDishDto: UpdateDishDto) {

  }

  remove(id: number) {

  }
}
