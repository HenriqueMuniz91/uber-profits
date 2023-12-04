import { GetProfitsResponse } from "../use-cases/get-profits/get-profits.controller";

export class ProfitsRepository {
  private profits = [];
  salvar(profit: number, date: Date): void {
    this.profits.push({
      profit, 
      date,
    });
  };
  get(): GetProfitsResponse[] {
    return this.profits;
  };
};