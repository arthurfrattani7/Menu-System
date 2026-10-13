import { ApiPropertyOptional } from "@nestjs/swagger";

export class PageTimingRequestDto {
  @ApiPropertyOptional({
    nullable: true,
    description:
      "Segundos que a página fica na tela. null = sem limite (só passa manualmente). Omitido = não altera",
  })
  durationSeconds?: number | null;

  @ApiPropertyOptional({
    description:
      "Segundo da música em que o trecho da página começa. Omitido = não altera",
  })
  musicStartSeconds?: number;
}
