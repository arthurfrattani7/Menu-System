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
}