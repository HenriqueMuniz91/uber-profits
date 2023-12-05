import { Profit } from "../domain/entities/profit.entity";
import { GetProfitsResponse } from "../use-cases/get-profits/get-profits.dto";

export class ProfitsRepository {
  private profits: Profit[] = [];
  salvar(profit: Profit): void {
    this.profits.push(profit);
  };
  get(): Profit[] {
    return this.profits;
  };
};