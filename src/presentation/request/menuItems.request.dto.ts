import { ApiProperty } from "@nestjs/swagger";

export class CreateMenuItemRequestDto {
  @ApiProperty({
    example: " Cerveja artesanal",
    description: "Nome da cerveja ou produto",
  })
  name: string;

  @ApiProperty({
    example: "Cerveja artesanal de trigo, com notas cítricas e refrescantes.",
    description: "Descrição dos ingredientes",
    required: false,
  })
  description?: string;

  @ApiProperty({ example: 34.9, description: "Preço de venda do item" })
  price: number;
}
