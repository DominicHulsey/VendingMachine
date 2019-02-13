import snack from "./snack.js";

let snacks = new snack

export default class vendingMachine {
  constructor() {
    this.Balance = 0
    this.snacks = {
      s1: new snack('M&Ms', .25, '//via.placeholder.com/150'),
      s2: new snack('Gumballs', .10, '//via.placeholder.com/150'),
      s3: new snack('Mike & Ikes', .50, '//via.placeholder.com/150'),
    }
  }
}