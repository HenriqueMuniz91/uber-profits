export class ProfitsRepository {
    private profits = [];
    salvar(profit) {
        this.profits.push(profit);
        console.log("salvar:" + this.profits)
    }
    get() {
        return this.profits
    }
}