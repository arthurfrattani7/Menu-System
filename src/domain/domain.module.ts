import { Module } from "@nestjs/common";
import { DbModule } from "../data/data.module";
import { UserDomain } from "./services/userDomain";
import { CoupleDomain } from "./services/coupleDomain";
import { MusicDomain } from "./services/musicDomain";
import { PageDomain } from "./services/pageDomain";
import { PhotoDomain } from "./services/photoDomain";
import { VideoDomain } from "./services/videoDomain";

@Module({
  imports: [DbModule],
  providers: [
    UserDomain,
    CoupleDomain,
    MusicDomain,
    PageDomain,
    PhotoDomain,
    VideoDomain,
  ],
  exports: [
    UserDomain,
    CoupleDomain,
    MusicDomain,
    PageDomain,
    PhotoDomain,
    VideoDomain,
  ],
})
export class DomainModule {}
