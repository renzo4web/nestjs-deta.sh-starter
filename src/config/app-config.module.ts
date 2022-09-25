import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './app.config';
import DetaBaseConfig from './deta-base.config';

const database = {
  provide: DetaBaseConfig,
  useFactory: (deps: any) => new DetaBaseConfig(deps),
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
  ],
  providers: [database, ConfigService],
  exports: [database],
})
export class AppConfigModule {}
