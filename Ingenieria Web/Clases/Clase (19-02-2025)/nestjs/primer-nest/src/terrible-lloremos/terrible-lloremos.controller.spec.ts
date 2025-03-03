import { Test, TestingModule } from '@nestjs/testing';
import { TerribleLloremosController } from './terrible-lloremos.controller';
import { TerribleLloremosService } from './terrible-lloremos.service';

describe('TerribleLloremosController', () => {
  let controller: TerribleLloremosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerribleLloremosController],
      providers: [TerribleLloremosService],
    }).compile();

    controller = module.get<TerribleLloremosController>(TerribleLloremosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
