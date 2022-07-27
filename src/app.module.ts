import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { Modules } from './config/modules';
import { DynamicModuleModule } from './module/dynamic-module/dynamic-module.module';
import { DynamicModuleService } from './module/dynamic-module/dynamic-module.service';
import { RolesGuard } from './shared/gurd/roles.guard';
import { TransformInterceptor } from './shared/transform.interceptor';

@Module({
  imports: [DynamicModuleModule.register('test'), ...Modules],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
