import { DynamicModule, Global, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Global()
@Module({})
export class DynamicModuleModule {
  static register(name: string): DynamicModule {
    return {
      module: DynamicModuleModule,
      providers: [
        {
          provide: 'CONFIGURATION_OPTIONS',
          useValue: name,
        },
        DynamicModuleService,
      ],
      exports: [DynamicModuleService],
    };
  }
}
