alert('Ingresando a la Calculadora')

const calculadora = () => {
let numero1 = 0
let numer2 = 0     
let resultado = 0
let calcularOtraOperacion = true
let total = 0

do {
    let numero1 = +prompt('Ingrese el primer numero: ')
    while (Number.isNaN(numero1) || numero1 === 0 ) {
        alert ('Ingrese un valor valido')
        numero1 = +prompt('Ingrese el primer numero: ')
    }
    let numero2 = +prompt('Ingrese el segundo numero: ')
    while (Number.isNaN(numero2) || numero2 === 0 ) {
        alert ('Ingrese un valor valido')
        numero2 = +prompt('Ingrese el segundo numero: ')
    }
    let operacion = prompt('Ingrese la operacion: ')

    switch (operacion){
        case'+':
        resultado = numero1 + numero2
        break

        case '-':
        resultado = numero1 - numero2
        break

        case '/':
        resultado = numero1 / numero2
        break

        case '*':
        resultado = numero1 * numero2
        break

        default:
            alert ('La operecion no es valida')
            numero1 = 1
            numero2 = 0 
            operacion = '*'
            break
        }

        total += resultado 
        calcularOtraOperacion = confirm(' ¿Desea calcular otra operacion? ')
        
    }

while (calcularOtraOperacion)
alert ('Resultado:' + total)
return total
}

let total = calculadora ()

console.log(total)


