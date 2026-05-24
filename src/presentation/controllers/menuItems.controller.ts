import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Put,
} from "@nestjs/common";
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiOkResponse,
} from "@nestjs/swagger";
import { MenuItemsApplication } from "../../application/applications/menuItems.application";
import { MenuItemsDto } from "../response/menuItems/menuItems.dto";
import { CreateMenuItemRequestDto } from "../request/menuItems.request.dto";

@Controller("menuItems")
@ApiTags("MenuItems")
export class MenuItemsController {
  constructor(private readonly menuItemsApplication: MenuItemsApplication) {}

  @Post()
  @ApiOperation({
    summary: "Cadastrar um novo item no cardápio",
    description:
      "Recebe os dados brutos da requisição e envia para a camada de aplicação processar.",
  })
  @ApiBody({ type: CreateMenuItemRequestDto })
  @ApiCreatedResponse({
    description: "Item criado com sucesso.",
    type: MenuItemsDto,
  })
  async createMenuItem(
    @Body() body: CreateMenuItemRequestDto,
  ): Promise<MenuItemsDto> {
    return await this.menuItemsApplication.saveMenuItem(body);
  }

  @Get()
  @ApiOperation({
    summary: "Listar todos os itens do cardápio",
    description: "Retorna uma lista de todos os itens do cardápio.",
  })
  @ApiOkResponse({
    description: "Lista de itens do cardápio.",
    type: MenuItemsDto,
  })
  async getAllMenuItems(): Promise<MenuItemsDto[]> {
    return await this.menuItemsApplication.getAllMenuItems();
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Excluir um item do cardápio",
    description: "Exclui um item do cardápio com base no ID fornecido.",
  })
  @ApiOkResponse({
    description: "Item excluído com sucesso.",
  })
  async deleteMenuItem(@Param("id") id: string): Promise<void> {
    await this.menuItemsApplication.deleteMenuItem(id);
  }

  @Put(":id")
  @ApiOperation({
    summary: "Atualizar um item do cardápio",
    description: "Atualiza um item do cardápio com base no ID fornecido.",
  })
  @ApiBody({ type: CreateMenuItemRequestDto })
  @ApiOkResponse({
    description: "Item atualizado com sucesso.",
    type: MenuItemsDto,
  })
  async updateMenuItem(
    @Param("id") id: string,
    @Body() body: CreateMenuItemRequestDto,
  ): Promise<MenuItemsDto> {
    return await this.menuItemsApplication.updateMenuItem(id, body);
  }
}
