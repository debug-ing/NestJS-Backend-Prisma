import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DynamicModuleService {
  constructor(@Inject('CONFIGURATION_OPTIONS') private options: string) {}

  getData(): string {
    return this.options;
  }
}
