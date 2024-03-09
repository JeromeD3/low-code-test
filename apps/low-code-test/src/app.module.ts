import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '../../../libs/comm/src/utils';
import { SiteModule } from './site/site.module';
import { PageModule } from './page/page.module';
import { DatabaseModule } from '@app/comm/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    SiteModule,
    PageModule,
  ],
  providers: [AppService],
})
export class AppModule {}
