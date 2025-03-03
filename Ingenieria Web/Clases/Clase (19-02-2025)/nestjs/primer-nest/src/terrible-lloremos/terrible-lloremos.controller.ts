import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerribleLloremosService } from './terrible-lloremos.service';
import { CreateTerribleLloremoDto } from './dto/create-terrible-lloremo.dto';
import { UpdateTerribleLloremoDto } from './dto/update-terrible-lloremo.dto';

@Controller('terrible-lloremos')
export class TerribleLloremosController {
  constructor(private readonly terribleLloremosService: TerribleLloremosService) {}

  @Post()
  create(@Body() createTerribleLloremoDto: CreateTerribleLloremoDto) {
    return this.terribleLloremosService.create(createTerribleLloremoDto);
  }

  @Get()
  findAll() {
    return this.terribleLloremosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terribleLloremosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerribleLloremoDto: UpdateTerribleLloremoDto) {
    return this.terribleLloremosService.update(+id, updateTerribleLloremoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terribleLloremosService.remove(+id);
  }
}
