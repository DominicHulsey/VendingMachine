import vendingMachine from '../../models/vendingMachine.js';

let VM = new vendingMachine()
//PUBLIC
export default class VendrService {
  get Balance() {
    return VM.Balance
  }


  addQuarter() {
    return VM.Balance += .25
  }

  withdrawMoney(snack) {
    let change = this.snackButtonChange()[snack]
    if (change > VM.Balance) {
      alert('You don\'t have enough money for that snack. Add more money immediately.')
      return VM.Balance
    } else {
      VM.Balance -= change
    }
    if (change < 0) {
      VM.Balance = 0
    }
  }
  resetter() {
    VM.Balance = 0
    return VM.Balance
  }
  snackButtons() {
    let nameArr = []
    for (const key in VM.snacks) {
      nameArr.push(VM.snacks[key].name)
    }
    return nameArr
  }
  snackButtonChange() {
    let priceArr = []
    for (const key in VM.snacks) {
      priceArr.push(VM.snacks[key].price)
    }
    return priceArr
  }
}