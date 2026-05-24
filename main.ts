import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("Menu Digital API")
    .setDescription("Documentação inicial das rotas")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`\n Servidor rodando em: http://localhost:${port}/api`);
}
bootstrap();
