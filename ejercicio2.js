// EJERCICIO 1
const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
let resto = numeroRandom % 2

if (resto ==0) {
    console.log("El numero " + numeroRandom + " es par")
    } else { console.log("el numero " + numeroRandom + " es impar")}

// EJERCICIO 2

let variable1 = "tren"
let variable2 = "edificio"

if (variable1.length > variable2.length) {
    console.log ("la variable 1 tiene mas palabras que la variable 2")
} else if (variable1.length == variable2.length) {
      console.log ("ambas variables tienen la misma cantidad de palabras")  
} else {
    console.log ("la variable 2 tiene mas palabras que la variable 1")
}

// EJERCICIO 3

for (let i = 1; i < 11; i++) {
    let resultado = i * 9
    console.log ("9 x " + i + "= " + resultado)
}

// EJERCICIO 4

const multiplicar = (num1) => num1 * 23
let resultado = multiplicar (10)
console.log ("el resultado es " + resultado)

// EJERCICIO 5

lista = []
while (lista.length < 10) {
    lista.push (Math.floor((Math.random() * (100 - 1 + 1)) + 1))
}
console.log (lista)