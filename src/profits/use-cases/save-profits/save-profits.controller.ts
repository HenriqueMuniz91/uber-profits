import { Body, Controller, Post } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";
import { InsertProfitsDTO } from "src/dto/insert-profits.dto";

@Controller('/profits')
export class SaveProfitsController {

  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Post('save')
  insertProfit(@Body() profitValue: InsertProfitsDTO) {
    this.profitsRepository.salvar(profitValue.value, profitValue.date);
    return "deu certo";
  };
};