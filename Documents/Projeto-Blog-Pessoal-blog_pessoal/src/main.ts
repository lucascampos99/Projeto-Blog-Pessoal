import { SwaggerModule } from "@nestjs/swagger";
import { DocumentBuilder } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto do Blog Pessoal')
    .setContact('Generation Brasil','www.genbr.com.br', 'cadusilverio444@gmail.com')
    .setVersion('1.o')
    .addBearerAuth()
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen( process.env.PORT || 8000);
}
bootstrap();
