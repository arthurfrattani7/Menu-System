import { Module } from '@nestjs/common';
import { UserApplication } from './applications/user.application';
import { CoupleApplication } from './applications/couple.application';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [UserApplication, CoupleApplication],
  exports: [UserApplication, CoupleApplication],
})
export class ApplicationModule {}
