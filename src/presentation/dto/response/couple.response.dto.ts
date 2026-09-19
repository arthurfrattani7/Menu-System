import { ApiProperty } from "@nestjs/swagger";

export class CoupleResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userOneId: string;

  @ApiProperty()
  userTwoId: string;

  @ApiProperty()
  createdAt: Date;
}
