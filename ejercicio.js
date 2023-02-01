let numero1 = 10
let numero2 = 5

//metodo1
function Sumamos (num1, num2) {
    const operacion = num1 + num2
    return operacion
}

let resultado = Sumamos(numero1, numero2)
console.log(resultado)

//metodo2
const Sumamos1 = (Param1, Param2) => numero1 + numero2
let resultado1 = Sumamos1 ()
console.log (resultado1)

//metodo3
const Sumamos3 = (Par1, Par2) => Par1 + Par2
let resultado3 = Sumamos3 (numero1, numero2)
console.log (resultado3)

//metodo4
function Sumamos2 (a,b) {
    const operacion1 = a + b
    return operacion1
}
let resultado2 = Sumamos2(numero1,numero2)
console.log(resultado2)