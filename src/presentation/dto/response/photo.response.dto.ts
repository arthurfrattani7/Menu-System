import { ApiProperty } from "@nestjs/swagger";

export class PhotoResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  sortOrder: number;

  @ApiProperty()
  pageId: string;

  @ApiProperty()
  createdAt: Date;
}
