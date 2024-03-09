import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { generateDocument } from './doc';
import { AllExceptionsFilter } from '@app/comm/exceptions/base.exception.filter';
import { HttpExceptionFilter } from '@app/comm/exceptions/http.exception.filter';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // 创建文档
  generateDocument(app);

  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }

  await app.listen(3000);
}
bootstrap();
