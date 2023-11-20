import { Body, Controller, Post } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";

@Controller('/profits')
export class SaveProfitsController {

  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Post('save')
  insertProfit(@Body() profitValue){
    console.log(profitValue);
    this.profitsRepository.salvar(profitValue.Value);
    console.log(profitValue.Value);
    return profitValue.Value;
  };
};