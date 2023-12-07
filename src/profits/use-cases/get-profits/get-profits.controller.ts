import { Controller, Get, Query } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";
import { Profit } from "src/profits/domain/entities/profit.entity";

@Controller ('/profits') 
export class GetProfitsController {
  
  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Get('get')
  getProfits(
    @Query('name') 
    name: string,
  ): Profit[] {
    console.log (name)
    const profits = this.profitsRepository.get(name);
    return profits;
  };
};
