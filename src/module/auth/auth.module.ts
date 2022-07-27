import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/auth/constants';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/shared/gurd/roles.guard';
import { JwtStrategy } from 'src/shared/gurd/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {},
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
