import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';
import { AllExceptionsFilter } from './comm/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './comm/exceptions/http.exception.filter';
import { TransformInterceptor } from './comm/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 创建文档
  generateDocument(app);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  await app.listen(3002);
}
bootstrap();
