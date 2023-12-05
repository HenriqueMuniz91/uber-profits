import { Controller, Get } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";
import { Profit } from "src/profits/domain/entities/profit.entity";

@Controller ('/profits') 
export class GetProfitsController {
  
  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Get('get')
  getProfits(): Profit[] {
    const profits = this.profitsRepository.get();
    console.log(profits);
    return profits;
  };
};
