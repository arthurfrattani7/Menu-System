import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuRequestDto {
  @ApiProperty({
    example: 'Cardápio de Bebidas - Sexta-feira',
    description: 'Nome ou título identificador para esta versão do cardápio volátil.',
  })
  name: string;

  @ApiProperty({
    example: '5521999999999',
    description: 'Número do WhatsApp ou identificador único do cliente que está a receber o cardápio.',
  })
  customerId: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o cardápio já foi disparado para o cliente no WhatsApp.',
    default: true,
    required: false,
  })
  sent: boolean;
}