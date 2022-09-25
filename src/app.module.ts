import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { AppConfigModule } from './config/app-config.module';

@Module({
  imports: [UsersModule, ConfigModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
