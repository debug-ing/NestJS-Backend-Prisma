import { Module } from '@nestjs/common';
import { SmsTokenService } from './sms-token.service';

@Module({
  providers: [SmsTokenService],
  exports: [SmsTokenService],
})
export class SmsTokenModule {}
