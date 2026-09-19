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

  @ApiProperty()
  createdAt: Date;
}
