import { Controller, Get } from "@nestjs/common";
import { ProfitsRepository } from "src/profits/repositories/profits.repository";

@Controller('/profits')
export class GetSumProfitsController {

  constructor(private profitsRepository: ProfitsRepository) {};

  @Get('sum')
  getSumProfits(): number {
    const profits = this.profitsRepository.get();
    const sum = profits.reduce((accumulator,value) => accumulator + value, 0);
    return sum;
  };
};