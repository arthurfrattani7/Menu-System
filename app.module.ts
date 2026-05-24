import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DbModule } from "./src/data/data.module";
import { DomainModule } from "./src/domain/domain.module";
import { ApplicationModule } from "./src/application/application.module";
import { PresentationModule } from "./src/presentation/presentation.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    DomainModule,
    ApplicationModule,
    PresentationModule,
  ],
})
export class AppModule {}
