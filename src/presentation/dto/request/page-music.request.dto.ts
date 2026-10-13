import { ApiProperty } from "@nestjs/swagger";

export class PageMusicRequestDto {
  @ApiProperty({
    nullable: true,
    description: "null remove a música da página",
  })
  musicId: string | null;
}
