import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/auth/constants';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/shared/gurd/roles.guard';
import { JwtStrategy } from 'src/shared/gurd/jwt.strategy';
import { AuthModule } from '../auth/auth.module';
import { SmsTokenModule } from '../sms-token/sms-token.module';

@Module({
  imports: [PrismaModule, AuthModule, SmsTokenModule],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {}
