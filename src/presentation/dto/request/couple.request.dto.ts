import { ApiProperty } from "@nestjs/swagger";

export class CoupleRequestDto {
  @ApiProperty()
  userOneId: string;

  @ApiProperty()
  userTwoId: string;
}
