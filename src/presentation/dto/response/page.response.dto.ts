import { ApiProperty } from "@nestjs/swagger";

export class PageResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  coupleId: string;

  @ApiProperty()
  order: number;

  @ApiProperty({ nullable: true })
  musicId: string | null;

  @ApiProperty({
    nullable: true,
    description: "Segundos na tela. null = sem limite (só passa manualmente)",
  })
  durationSeconds: number | null;

  @ApiProperty({ description: "Segundo da música em que o trecho começa" })
  musicStartSeconds: number;

  @ApiProperty()
  createdAt: Date;
}
