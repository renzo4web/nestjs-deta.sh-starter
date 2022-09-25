import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import DetaBaseConfig from '../config/deta-base.config';

@Injectable()
export class UsersService {
  @Inject()
  private detaBase: DetaBaseConfig;

  async create(createUserDto: CreateUserDto) {
    return await this.detaBase.db.put(createUserDto);
  }

  async findAll() {
    return await this.detaBase.db.fetch();
  }

  async findOne(id: string) {
    return await this.detaBase.db.get(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.detaBase.db.insert(updateUserDto, id);
  }

  async remove(id: string) {
    return await this.detaBase.db.delete(id);
  }
}
