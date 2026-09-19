import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { UserController } from "./controllers/user.controller";
import { CoupleController } from "./controllers/couple.controller";
import { MusicController } from "./controllers/music.controller";
import { PageController } from "./controllers/page.controller";

@Module({
  imports: [ApplicationModule],
  controllers: [
    UserController,
    CoupleController,
    MusicController,
    PageController,
  ],
})
export class PresentationModule {}
