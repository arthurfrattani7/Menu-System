import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { UserController } from "./controllers/user.controller";
import { CoupleController } from "./controllers/couple.controller";
import { MusicController } from "./controllers/music.controller";
import { PageController } from "./controllers/page.controller";
import { PhotoController } from "./controllers/photo.controller";
import { VideoController } from "./controllers/video.controller";
import { AuthController } from "./controllers/auth.controller";
import { PassportModule } from "@nestjs/passport";
import { APP_GUARD } from "@nestjs/core";
import { JwtStrategy } from "./auth/jwt.strategy";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Module({
  imports: [ApplicationModule, PassportModule],
  providers: [JwtStrategy, { provide: APP_GUARD, useClass: JwtAuthGuard }],
  controllers: [
    UserController,
    CoupleController,
    MusicController,
    PageController,
    PhotoController,
    VideoController,
    AuthController,
  ],
})
export class PresentationModule {}
