import { Module } from '@nestjs/common';
import { DbModule } from '../data/data.module';

@Module({
  imports: [DbModule],
  providers: [],
  exports: [],
})
export class DomainModule {}