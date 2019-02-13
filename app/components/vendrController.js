import VendrService from "./vendrService.js";
import snack from "../../models/snack.js";
import vendingMachine from "../../models/vendingMachine.js";

//PRIVATE
let vend = new VendrService()

function draw() {
  let template = vend.Balance
  document.getElementById('Balance').innerText = template.toFixed(2)
}

function snackButtons1() {
  let nameArr = vend.snackButtons()
  let priceArr = vend.snackButtonChange()
  for (let i = 0; i < nameArr.length; i++) {
    document.getElementById('buttons').innerHTML += `<button class="btn btn-primary mr-1" onclick="app.controllers.vendrController.subPrice(${i})"> ${nameArr[i]} ($${priceArr[i]}) </button>`
  }
}

//PUBLIC
export default class VendrController {
  constructor() {
    draw()
    snackButtons1()
  }

  addQuarter1() {
    vend.addQuarter()
    draw()
  }
  reset() {
    vend.resetter()
    draw()
  }
  stay() {

    let answer = window.confirm('We\'re sorry to see you leave. If you stay, we will give you a free $.50 credit to your account. Do we have a deal?')
    if (answer == true) {
      vend.addQuarter()
      vend.addQuarter()
      draw()
    }
    else {
      let answer1 = window.confirm('Are you sure? We\'ll give you $1 if you don\'t refund...')
      if (answer1 == true) {
        vend.addQuarter()
        vend.addQuarter()
        vend.addQuarter()
        vend.addQuarter()
        draw()
      }
      else {
        let answer3 = window.confirm('$5?')
        if (answer3 == true) {
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          vend.addQuarter()
          draw()
        } else {
          alert('Fine, be that way.')
          vend.resetter()
          draw()
        }
      }
    }
  }
  subPrice(snack) {
    vend.withdrawMoney(snack)
    draw()
  }

}