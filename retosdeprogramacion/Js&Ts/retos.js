/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// for(let i = 1 i <= 100 i = i + 1 ){
//     console.log(i)
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log("FIZZBUZZ")
//     } else if( i % 5 === 0){
//         console.log("buzz")
//     } else if( i % 3 === 0){
//         console.log("fizz")
//     }
// }

// --------------------------------------- Segundo Ejercicio
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 
const reference = prompt("Dame un anagrama de refencia")
const wordTest = prompt("Dame una palabra que concida")

function esAnagrama(reference, wordTest) {
    const sortedReference = reference.split('').sort().join('')
    const sortedWordTest = wordTest.split('').sort().join('')
    
    return sortedReference === sortedWordTest
}

console.log(esAnagrama(reference, wordTest))
*/
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// --------------------------------------- Tercer Ejercicio
// const Fibonacci = () => { 
//     let acumulador = [1,2,3,5,8,13]
//     for(num of acumulador){
//         console.log(num)
//     }
//  }
// Fibonacci()
// function fibonacci(n){
//     let x = 0
//     let y = 1
//     let z = 1
//     let arr=[]
    
//     for (let i = 0 i <= n i++) {
//         z = x + y
//         x = y
//         y = z
//         let arr = arr + z 
//     }

//     return x
// }
// fibonacci()
// console.log(fibonacci())

// --------------------------------------- Cuarto Ejercicio
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// for (let i = 1 i < 101 i++){
//     let esPrimo = i % 2
//     if ( esPrimo ){
//         console.log(i)

//     }
// }

// --------------------------------------- Quinto Ejercicio
/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


// const calcularArea = () => { 
//     let poligono = prompt("choose a geometric figure")
//     if (poligono.toLowerCase() === "triangulo" ){
//         let b = prompt("Cual es la base")
//         let h = prompt("Cual es la altura?")
//         let basePorAltura = Number(b) * Number(h)
//         console.log( "El aréa de tu triangulo es: ", basePorAltura / 2 )
//     } else if (poligono.toLowerCase() === "cuadrado" ){
//         let b = prompt("De cuanto es el lado")
//         let basePorAltura = Number(b) * Number(b)
//         console.log( "El aréa de tu cuadrado es: ", basePorAltura )
//     } else if (poligono.toLowerCase() === "rectangulo" ){
//         let b = prompt("Cual es la base")
//         let h = prompt("Cual es la altura?")
//         let basePorAltura = Number(b) * Number(h)
//         console.log( "El aréa de tu rectangulo es: ", basePorAltura * 2 )
//     }
// }
// calcularArea()

// --------------------------------------- séptimo Ejercicio
/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
// let word = "eat"
// let array = word.split("")
// console.log(typeof(array))

// ------------------------------------------ PERSONAL EXERCISE
let grepHTML = document.getElementById("grepHTML")
let testamentoHTML = document.getElementsByTagName("p")
let testamentoData = testamentoHTML[0].firstChild.data
let getArray = Array.from(testamentoData)
console.log(typeof(testamentoData))

// let testText = testamentoElement.textContent // o .innerText
// console.log(testText)

const grep = () => { 
    let caracter = grepHTML.value
    console.log(typeof(caracter))

    let busqueda = testamentoData.split("") 

    const result = busqueda.filter((letra) => letra == caracter)
    console.log(result) 
    console.log(typeof(result)) 

}
grep()


// * Crea un programa que cuente cuantas veces se repite cada palabra
// * y que muestre el recuento final de todas ellas.
let inputList = []

// let initial = prompt("repetidos de palabras hasta que el input sea falsy")
// while ( initial ){
//  let input = prompt("Bienvenido al buscador de palabras, donde tu creas las palbras")
// inputList.push(input)    
// console.log(inputList)

// const countWord = inputList.reduce((acc, word) =>{
//     word = word.toLocaleLowerCase()
//     if( acc[word] ){
//         acc[word]++
//     } else{
//         acc[word] = 1
//     }
//     return acc
// }, {})

// let muchMatch = inputList.filter((word) => word.toLocaleLowerCase() === word.toLocaleLowerCase())
// console.log(muchMatch, " con ", countWord, " palabras en común")
// }

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
const toBinary = (num) => { 
    if ( isNaN(num)){
        console.log("bad argument")
    }
    Number(num)
    let getBinary = num.toString(2)
    console.log(getBinary)
}

const morseCode = (text) => { 
    
    const morseCodeMap = {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
        'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
        'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
        'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
        'Z': '--..',  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', ' ': ' / '  // Represent space as /
        };

    let getArray = text.toUpperCase().split('');
    let acc = []

    getArray.forEach(char => {
        if(morseCodeMap[char]){
            acc.push(morseCodeMap[char])
        }
    });
    return acc.join(' ');
    }
console.log(morseCode("Hola"))