import { Global, Module } from '@nestjs/common';
import { MapperRepository } from './mapper';

@Global()
@Module({
  providers: [MapperRepository],
  exports: [MapperRepository],
})
export class MapperRepositoryModule {}
