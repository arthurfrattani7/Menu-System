import { Module } from "@nestjs/common";
import { DbModule } from "../data/data.module";
import { UserDomain } from "./services/userDomain";
import { CoupleDomain } from "./services/coupleDomain";

@Module({
  imports: [DbModule],
  providers: [UserDomain, CoupleDomain],
  exports: [UserDomain, CoupleDomain],
})
export class DomainModule {}
