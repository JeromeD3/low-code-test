import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { TransformInterceptor } from '../../../libs/comm/src/interceptors/transform.interceptor';
import { AllExceptionsFilter } from '../../../libs/comm/src/exceptions/base.exception.filter';
import { HttpExceptionFilter } from '../../../libs/comm/src/exceptions/http.exception.filter';
import { generateDocument } from './doc';

declare const module: any;
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

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3000);
}
bootstrap();
