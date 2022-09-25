import { Inject, Injectable } from '@nestjs/common';
import { Deta } from 'deta';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class DetaBaseConfig {
  public db: any;

  constructor(@Inject() private configService: ConfigService) {
    const deta = Deta(this.configService.get<string>('DETA_KEY'));
    this.db = deta.Base('users');
  }
}
