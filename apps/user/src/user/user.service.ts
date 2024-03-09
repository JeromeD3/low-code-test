import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private departmentService: DepartmentService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const dep = await this.departmentService.findOne(
      createUserDto.departmentId,
    );
    return this.userRepository.save({
      ...createUserDto,
      department: dep,
    });
  }

  findAll() {
    return this.userRepository.find({ relations: ['department'] });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
