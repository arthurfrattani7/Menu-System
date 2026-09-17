import { Module } from '@nestjs/common';
import { UserApplication } from './applications/user.application';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [UserApplication],
  exports: [UserApplication],
})
export class ApplicationModule {}
