import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PageRequestDto {
  @ApiProperty()
  coupleId: string;

  @ApiProperty()
  order: number;

  @ApiPropertyOptional()
  musicId?: string;
}
