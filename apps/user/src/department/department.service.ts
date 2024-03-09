import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.mysql.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private depRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.depRepository.save({
      ...createDepartmentDto,
    });
  }

  findAll() {
    return this.depRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return this.depRepository.findOneBy({ id });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.depRepository.update({ id }, updateDepartmentDto);
  }

  remove(id: number) {
    return this.depRepository.delete(id);
  }
}
