import { Module } from "@nestjs/common";
import { DbModule } from "../data/data.module";
import { UserDomain } from "./services/userDomain";
import { CoupleDomain } from "./services/coupleDomain";
import { MusicDomain } from "./services/musicDomain";
import { PageDomain } from "./services/pageDomain";

@Module({
  imports: [DbModule],
  providers: [UserDomain, CoupleDomain, MusicDomain, PageDomain],
  exports: [UserDomain, CoupleDomain, MusicDomain, PageDomain],
})
export class DomainModule {}
