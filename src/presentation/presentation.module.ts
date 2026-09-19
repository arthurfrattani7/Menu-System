import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { UserController } from "./controllers/user.controller";
import { CoupleController } from "./controllers/couple.controller";
import { MusicController } from "./controllers/music.controller";

@Module({
  imports: [ApplicationModule],
  controllers: [UserController, CoupleController, MusicController],
})
export class PresentationModule {}
