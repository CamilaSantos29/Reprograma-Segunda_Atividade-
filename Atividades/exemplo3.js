//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 300
let taxaGarcom = (10/100) * 300
let valorTotalASerPago = valorJantar - taxaGarcom

console.log(`O valor total a pagar pelo jantar no restaurante é de:${valorTotalASerPago} reais`) // 270 reais