import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from "@nestjs/swagger"

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any){
    return resposta.redirect('/swagger')
  }
}