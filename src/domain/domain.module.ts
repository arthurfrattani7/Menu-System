import { Module } from "@nestjs/common";
import { DbModule } from "../data/data.module";
import { UserDomain } from "./services/userDomain";

@Module({
  imports: [DbModule],
  providers: [UserDomain],
  exports: [UserDomain],
})
export class DomainModule {}
