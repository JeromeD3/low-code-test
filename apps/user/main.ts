import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { generateDocument } from './doc';
import { AllExceptionsFilter } from './src/comm/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './src/comm/exceptions/http.exception.filter';
import { TransformInterceptor } from './src/comm/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 接口版本化管理
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  // 创建文档
  generateDocument(app);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  await app.listen(3002);
}
bootstrap();
