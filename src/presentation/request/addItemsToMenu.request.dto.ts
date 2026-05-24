import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class AddItemsToMenuDto {
  @ApiProperty({
    example: ["id-da-heineken-aqui", "id-da-amstel-aqui"],
    description:
      "Lista de UUIDs dos itens que serão injetados neste cardápio volátil",
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  itemIds: string[];
}
