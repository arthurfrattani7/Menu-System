import { Module } from '@nestjs/common';
import { UserApplication } from './applications/user.application';
import { CoupleApplication } from './applications/couple.application';
import { MusicApplication } from './applications/music.application';
import { PageApplication } from './applications/page.application';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [
    UserApplication,
    CoupleApplication,
    MusicApplication,
    PageApplication,
  ],
  exports: [
    UserApplication,
    CoupleApplication,
    MusicApplication,
    PageApplication,
  ],
})
export class ApplicationModule {}
