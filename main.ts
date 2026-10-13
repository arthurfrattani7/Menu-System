import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix("api");

  app.enableCors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  });

  // Serve os arquivos enviados (fora do prefixo /api)
  app.useStaticAssets(join(process.cwd(), "uploads"), { prefix: "/uploads/" });

  const config = new DocumentBuilder()
    .setTitle("Menu Digital API")
    .setDescription("Documentação inicial das rotas")
    .setVersion("1.0")
    .addBearerAuth()
    .addSecurityRequirements("bearer")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`\n Servidor rodando em: http://localhost:${port}/api`);
}
bootstrap();
