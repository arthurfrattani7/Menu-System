import { ApiProperty } from "@nestjs/swagger";

export class MusicRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  artist: string;

  @ApiProperty()
  url: string;
}
