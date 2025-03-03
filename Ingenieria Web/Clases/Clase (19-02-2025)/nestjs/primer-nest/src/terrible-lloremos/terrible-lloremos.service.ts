import { Injectable } from '@nestjs/common';
import { CreateTerribleLloremoDto } from './dto/create-terrible-lloremo.dto';
import { UpdateTerribleLloremoDto } from './dto/update-terrible-lloremo.dto';

@Injectable()
export class TerribleLloremosService {
  create(createTerribleLloremoDto: CreateTerribleLloremoDto) {
    return 'This action adds a new terribleLloremo';
  }

  findAll() {
    return `This action returns all terribleLloremos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terribleLloremo`;
  }

  update(id: number, updateTerribleLloremoDto: UpdateTerribleLloremoDto) {
    return `This action updates a #${id} terribleLloremo`;
  }

  remove(id: number) {
    return `This action removes a #${id} terribleLloremo`;
  }
}
