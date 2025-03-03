import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // permiso para que una aplicacion externa se pueda conectar
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
  }));

  const config=new DocumentBuilder()
  .setTitle('API')
  .setDescription('API de ejemplo')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
