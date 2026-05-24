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
import { MenuApplication } from "../../application/applications/menu.application";
import { MenuDto } from "../response/menuItems/menu.dto";
import { CreateMenuRequestDto } from "../request/menu.request.dto";
import { AddItemsToMenuDto } from "../request/addItemsToMenu.request.dto";
import { MenuWithItemsDto } from "../response/menuItems/menuWithItems.dto";

@Controller("menus")
@ApiTags("Menus")
export class MenuController {
  constructor(private readonly menuApplication: MenuApplication) {}

  @Post()
  @ApiOperation({
    summary: "Cadastrar um novo cardápio",
    description:
      "Recebe os dados brutos da requisição e envia para a camada de aplicação processar.",
  })
  @ApiBody({ type: CreateMenuRequestDto })
  @ApiCreatedResponse({
    description: "Cardápio criado com sucesso.",
    type: MenuDto,
  })
  async createMenu(@Body() body: CreateMenuRequestDto): Promise<MenuDto> {
    return await this.menuApplication.saveMenu(body);
  }

  @Post(":id/items")
  @ApiOperation({
    summary: "Adicionar bebidas existentes a um cardápio",
    description:
      "Vincula uma lista de MenuItems (IDs) a um cardápio específico gerado para um cliente.",
  })
  @ApiBody({ type: AddItemsToMenuDto })
  @ApiCreatedResponse({
    description: "Itens vinculados com sucesso ao cardápio.",
    type: MenuWithItemsDto,
  })
  async addItems(
    @Param("id") id: string,
    @Body() body: AddItemsToMenuDto,
  ): Promise<MenuWithItemsDto> {
    return await this.menuApplication.addItemsToMenu(id, body.itemIds);
  }
}
