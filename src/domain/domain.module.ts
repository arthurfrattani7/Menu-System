import { Module } from "@nestjs/common";
import { DbModule } from "../data/data.module";
import { UserDomain } from "./services/userDomain";
import { CoupleDomain } from "./services/coupleDomain";
import { MusicDomain } from "./services/musicDomain";

@Module({
  imports: [DbModule],
  providers: [UserDomain, CoupleDomain, MusicDomain],
  exports: [UserDomain, CoupleDomain, MusicDomain],
})
export class DomainModule {}
