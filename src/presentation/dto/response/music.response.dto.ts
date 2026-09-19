import { ApiProperty } from "@nestjs/swagger";

export class MusicResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  artist: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  createdAt: Date;
}
