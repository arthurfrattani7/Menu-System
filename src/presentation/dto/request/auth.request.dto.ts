import { ApiProperty } from "@nestjs/swagger";

export class AuthLoginRequestDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
