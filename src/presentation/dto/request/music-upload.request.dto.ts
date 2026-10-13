import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class MusicUploadRequestDto {
  @ApiProperty({ type: "string", format: "binary" })
  file: any;

  @ApiProperty()
  name: string;

  @ApiProperty()
  artist: string;

  @ApiPropertyOptional({
    description: "Se informado, a música já é vinculada à página",
  })
  pageId?: string;
}
