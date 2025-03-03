import { Test, TestingModule } from '@nestjs/testing';
import { TerribleLloremosService } from './terrible-lloremos.service';

describe('TerribleLloremosService', () => {
  let service: TerribleLloremosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerribleLloremosService],
    }).compile();

    service = module.get<TerribleLloremosService>(TerribleLloremosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
