import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PageRequestDto {
  @ApiProperty()
  coupleId: string;

  @ApiProperty()
  order: number;

  @ApiPropertyOptional()
  musicId?: string;

  @ApiPropertyOptional({
    nullable: true,
    default: 15,
    description:
      "Segundos que a página fica na tela. Omitido = 15. null = sem limite (só passa manualmente)",
  })
  durationSeconds?: number | null;

  @ApiPropertyOptional({
    default: 0,
    description: "Segundo da música em que o trecho da página começa",
  })
  musicStartSeconds?: number;
}
