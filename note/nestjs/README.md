# nestjs


## swagger 集成

```ts
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/hello/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置swagger文档
  const swaggerOptions = new DocumentBuilder()
    .setTitle('API 接口文档')
    .setDescription('详细的api 接口')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}

bootstrap();
```