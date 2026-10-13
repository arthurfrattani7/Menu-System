import { Module } from '@nestjs/common';
import { UserApplication } from './applications/user.application';
import { CoupleApplication } from './applications/couple.application';
import { MusicApplication } from './applications/music.application';
import { PageApplication } from './applications/page.application';
import { PhotoApplication } from './applications/photo.application';
import { VideoApplication } from './applications/video.application';
import { AuthApplication } from './applications/auth.application';
import { CoupleAccess } from './authorization/couple-access';
import { DomainModule } from '../domain/domain.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DomainModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get('JWT_EXPIRES_IN') || '7d' },
      }),
    }),
  ],
  providers: [
    UserApplication,
    CoupleApplication,
    MusicApplication,
    PageApplication,
    PhotoApplication,
    VideoApplication,
    AuthApplication,
    CoupleAccess,
  ],
  exports: [
    UserApplication,
    CoupleApplication,
    MusicApplication,
    PageApplication,
    PhotoApplication,
    VideoApplication,
    AuthApplication,
  ],
})
export class ApplicationModule {}
