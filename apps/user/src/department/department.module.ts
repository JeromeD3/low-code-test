import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentProviders } from './entities/department.providers';

@Module({
  controllers: [DepartmentController],
  providers: [...DepartmentProviders, DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}
