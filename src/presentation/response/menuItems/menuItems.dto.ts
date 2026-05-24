import { ApiProperty } from "@nestjs/swagger";

export class MenuItemsDto {
  @ApiProperty({ example: "123e4567-e89b-12d3-a456-426614174000" })
  id?: string;

  @ApiProperty({ example: "Item 1" })
  name: string;

  @ApiProperty({ example: "Descrição do item 1" })
  description?: string;

  @ApiProperty({ example: 10.99 })
  price: number;

  @ApiProperty({ example: "2024-06-01T12:00:00Z" })
  createdAt?: Date;

  @ApiProperty({ example: "2024-06-01T12:00:00Z" })
  updatedAt?: Date;
}
