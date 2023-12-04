import { Controller, Get } from "@nestjs/common";
import { ProfitsRepository } from "../../repositories/profits.repository";
export type GetProfitsResponse = {
  profit: number
  date: Date
}

@Controller ('/profits') 
export class GetProfitsController {
  
  constructor (private profitsRepository: ProfitsRepository) {};
  
  @Get('get')
  getProfits(): GetProfitsResponse[] {
    const profits = this.profitsRepository.get();
    console.log(profits);
    return profits;
  };
};
