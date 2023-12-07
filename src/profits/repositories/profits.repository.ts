import { Profit } from "../domain/entities/profit.entity";

export class ProfitsRepository {
  private profits: Profit[] = [];
  salvar(profit: Profit): void {
    this.profits.push(profit);
  };
  get(name?: string): Profit[] {
    if (name) {
      const profitsWithFilters = this.profits.filter((profit) => {
        if (profit.name == name){
          return true
        } 
      })
      return profitsWithFilters
    }
    
    return this.profits;
  };
};
