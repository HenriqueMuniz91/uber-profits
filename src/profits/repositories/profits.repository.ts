export class ProfitsRepository {
  private profits = [];
  salvar(profit: number): void {
    this.profits.push(profit);
  };
  get(): number[] {
    return this.profits;
  };
};