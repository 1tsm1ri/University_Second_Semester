import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursoModule } from './recurso/recurso.module';
import { TerribleLloremosModule } from './terrible-lloremos/terrible-lloremos.module';

@Module({
  imports: [RecursoModule, TerribleLloremosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
