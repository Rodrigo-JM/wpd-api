import { Global, HttpModule, Module } from '@nestjs/common';
import * as configService from './services/config.service';
const providers = [configService.ConfigService];
@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
