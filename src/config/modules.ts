import { AuthModule } from 'src/module/auth/auth.module';
import { SmsTokenModule } from 'src/module/sms-token/sms-token.module';
import { UserModule } from 'src/module/user/user.module';

export const Modules = [UserModule, AuthModule, SmsTokenModule];
