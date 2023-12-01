import { Controller, Get } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";

@Controller ('/profits') 
export class GetProfitsController {
  
  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Get('get')
  getProfits(): number[] {
    const profits = this.profitsRepository.get();
    console.log(profits);
    return profits;
  };
};
