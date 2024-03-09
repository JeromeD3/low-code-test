import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';
import { TransformInterceptor } from '@app/comm/interceptors/transform.interceptor';
import { HttpExceptionFilter } from '@app/comm/exceptions/http.exception.filter';
import { AllExceptionsFilter } from '@app/comm/exceptions/base.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 创建文档
  generateDocument(app);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  await app.listen(3002);
}
bootstrap();
