import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { PageConfigService } from './page-config.service';
import { PageConfig } from './entities/page-config.entity';
import { Page } from './entities/page.entity';

@Module({
  controllers: [PageController],
  providers: [
    PageService,
    PageConfigService,
    {
      provide: 'PAGE_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(Page),
      inject: ['MONGODB_DATA_SOURCE'],
    },
    {
      provide: 'PAGE_CONFIG_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(PageConfig),
      inject: ['MONGODB_DATA_SOURCE'],
    },
  ],
})
export class PageModule {}
