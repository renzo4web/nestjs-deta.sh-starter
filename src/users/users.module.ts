import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppConfigModule } from '../config/app-config.module';

@Module({
  imports: [AppConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
