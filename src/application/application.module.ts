import { Module } from '@nestjs/common';
import { UserApplication } from './applications/user.application';
import { CoupleApplication } from './applications/couple.application';
import { MusicApplication } from './applications/music.application';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [UserApplication, CoupleApplication, MusicApplication],
  exports: [UserApplication, CoupleApplication, MusicApplication],
})
export class ApplicationModule {}
