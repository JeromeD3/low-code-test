import { Injectable } from '@nestjs/common';

@Injectable()
export class PageConfigService {
  create(createPageConfigDto: any) {
    return 'This action adds a new pageConfig';
  }

  findAll() {
    return `This action returns all pageConfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageConfig`;
  }

  update(id: number, updatePageConfigDto: any) {
    return `This action updates a #${id} pageConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageConfig`;
  }
}
