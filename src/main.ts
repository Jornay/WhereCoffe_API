import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environment/environment';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
  });

  const config = new DocumentBuilder()
    .setTitle(environment.SWAGGER_TITLE)
    .setDescription('API do Best Seat')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(environment.PORT || 3000);
}
bootstrap();