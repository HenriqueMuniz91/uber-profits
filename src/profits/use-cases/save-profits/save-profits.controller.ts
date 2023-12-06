import { Body, Controller, Post } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";
import { SaveProfitsDTO } from "src/profits/use-cases/save-profits/save-profits.dto";
import { Profit } from "src/profits/domain/entities/profit.entity";

@Controller('/profits')
export class SaveProfitsController {

  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Post('save')
  insertProfit(
    @Body() 
    profitValue: SaveProfitsDTO
  ) {
    const profit = new Profit(profitValue.value, profitValue.date, profitValue.name);
    this.profitsRepository.salvar(profit);
    return "deu certo";
  };
};