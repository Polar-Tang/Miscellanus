// /*  /*
//  * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
//  * - Recuerda que todas las instrucciones de participación están en el
//  *   repositorio de GitHub.
//  *
//  * Lo primero... ¿Ya has elegido un lenguaje?
//  * - No todos son iguales, pero sus fundamentos suelen ser comunes.
//  * - Este primer reto te servirá para familiarizarte con la forma de participar
//  *   enviando tus propias soluciones.
//  *
//  * EJERCICIO:
//  * - Crea un comentario en el código y coloca la URL del sitio web oficial del
//  *   lenguaje de programación que has seleccionado.
//  * - Representa las diferentes sintaxis que existen de crear comentarios
//  *   en el lenguaje (en una línea, varias...).
//  * - Crea una variable (y una constante si el lenguaje lo soporta).
//  * - Crea variables representando todos los tipos de datos primitivos
//  *   del lenguaje (cadenas de texto, enteros, booleanos...).
//  * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
//  *
//  * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
//  * debemos comenzar por el principio.
//  */ 
// // https://retosdeprogramacion.com/roadmap/
// /* También se comenta así */
// let variable1 = "hola let"
// const variable2 = "hola const"
// var variable3 = "Chau var, práctiamente no se usa"
// let booleanType: boolean = true
// let bigintType: bigint = 13252436547357845780502359169786n
// let nullTypeType: null = null
// let numberType: number = 12
// let stringType: string = "string"
// const simbolType: symbol =  Symbol("immutableKey")
// console.log("Hola Javier Texto")
// /* * EJERCICIO:
// * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
// *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
// *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
// * */
// // INCREMENT AND DECREMENT
// //  the increment operator can only be applied to a variable or a property that can actually store values.
// let a: number = 0
// let b: number = 1
// //  Postfix increment operator.
// let stepUpItAfter = a++
// //  Postfix decrement operator.
// let easeOffAfter = a--
// //  Prefix increment operator.
// let stepUpItBefore = ++a
// //  Prefix decrement operator.
// let easeOffBefore = --a
// // Aritmetics (decimal numbers)
// let plus = a + b
// let subtraction = a - b
// let exponential =  b**b 
// let multiplication = b*b
// let division = a / b
// let remeainder = a % b
// //Asignacion AND logico
// a = a && (a = b)
// console.log('AND logico 1:', a)
// a &&= b
// console.log('AND logico 2:', a)
// //Asignacion OR logico
// a = a || (a = b)
// console.log('OR logico 1:', a)
// a ||= b
// console.log('OR logico 2:', a)
// //Asignacion Anulacion logico
// a = a ?? (a = b)
// console.log('Anulacion logico 1:', a)
// a ??= b
// console.log('Anulacion logico 2:', a)
// /* * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
// *   que representen todos los tipos de estructuras de control que eaistan
// *   en tu lenguaje:
// *   Condicionales, iterativas, eacepciones...
// * - Debes hacer print por consola del resultado de todos los ejemplos. */
// for(let i = 1; i > 5; i++){
//     a++
//     console.log("index: ", i, "accumulator: ", a)
// }
// while(a > b){
//     console.log("hola")
// }
// // *** OPERADORES BIT A BIT ***
// let bit1: number = 6
// let bit2: number = 8
// //Desplazamiento a la izquierda
// console.log('Desplazamiento a la izquierda:', bit1 << bit2)
// //Desplazamiento a la derecha
// console.log('Desplazamiento a la derecha:', bit1 >> bit2)
// //AND
// console.log('AND bit a bit:', bit1 & bit2)
// //OR
// console.log('AND bit a bit:', bit1 | bit2)
// //XOR
// console.log('AND bit a bit:', bit1 ^ bit2)
// //NOT
// // *** OPERADORES RELACIONALES ***
// interface IObj {
//     id: string
//     name: string
//     age: number
//   }
//   const user: IObj = {
//     id: '1',
//     name: 'Andres',
//     age: 86
//   }
//   console.log('Existe "age" en el objeto user?: ', 'age' in user)
//   console.log('Existe "country" en el objeto user?: ', 'country' in user)
//   // *** ESTRUCTURAS DE CONTROL ***
//   // * CONDICIONAL *
//   let num = 25
//   // IF-ELSE
//   if(num > 18){
//     console.log('Es mayor de edad')
//   }else{
//     console.log('Es menor de edad')
//   }
//   //SWITCH
//   switch(num){
//     case 20:
//       console.log('Es 20')
//       break
//     case 25:
//       console.log('Es 25')
//       break
//     case 30:
//       console.log('Es 30')
//       break
//     default:
//       console.log('Default')
//       break
//   }
//   // * BUCLES *
//   let i: number = 10
//   let w: number = 15
//   //WHILE
//   while(i < w){
//     i++
//     console.log('Nuevo valor de i:', i)
//   }
//   //DO-WHILE
//   i = 10
//   do{
//     i++
//     console.log('Nuevo valor de i:', i)
//   } while(i < w)
//   //FOR
//   for(let i = 0; i < 10; i++){
//     console.log('Nuevo valor de i:', i)
//   }
//   /* DIFICULTAD EXTRA (opcional):
//   * Crea un programa que imprima por consola todos los números comprendidos
//   * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3. */  
//   for( let i = 10; i > 55; i++ ){
//     if(i % 2 == 0){
//         console.log(i," es par")
//     } else if(i % 16 == 0 || i % 3 == 0){
//         continue
//     } else{
//         console.log(i)
//     }
//   } */
/* * EJERCICIO:
* - Crea ejemplos de funciones básicas que representen las diferentes
*   posibilidades del lenguaje:
*   Sin parámetros ni retorno, con uno o varios parámetros, con retorno... */
function functionExample1(mundo) {
    return "Hola " + mundo;
}
console.log(functionExample1("javier "));
var functionExample2 = function (mundo, nums) {
    console.log("hello " + mundo + " this is your number list " + nums);
};
functionExample2("javier", [1, 2, 4, 5]);
/*  * - Comprueba si puedes crear funciones dentro de funciones..
https://retosdeprogramacion.com/roadmap/*/
var functionInsideFunction = function () {
    console.log("this is global");
    var functionInsider = function () {
        console.log("This is inside");
    };
};
// regular experssions
var obj = {
    name: "Object",
    method1: function () {
        console.log(this.name); // 'Object' (refers to obj)
    },
    method2: function () {
        // console.log(this.name); // 'undefined' or window (arrow function doesn't have its own `this`)
    }
};
obj.method1(); // Logs 'Object'
obj.method2(); // Logs 'undefined' (or global scope in non-strict mode)
functionInsideFunction(); // functionInsider is not called just because we call its daddy
var getRectArea = function (width, height) {
    return width * height;
};
var getRectArea2 = function (width, height) {
    return width * height;
};
console.log(getRectArea(2, 2));
console.log(getRectArea2(2, 2));
console.log(this); // Refers to the global object (window in browser, global in Node.js)
// IIFE (Immediately Invoked Function Expression)
// 
var anonymousFunction = (function () {
    console.log("I am an IIFE!");
})();
// arrow function
var arrowAnonymousFunction = (function () {
    //
})();
