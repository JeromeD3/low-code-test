import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }

  @Get()
  findAll() {
    return this.appService.getHello();
  }
}
