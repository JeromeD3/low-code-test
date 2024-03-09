import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/comm/database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './entities/user.providers';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [DatabaseModule, DepartmentModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
