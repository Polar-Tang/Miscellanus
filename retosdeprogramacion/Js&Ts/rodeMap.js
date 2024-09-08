/*  /*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */
// https://retosdeprogramacion.com/roadmap/
/* También se comenta así */
var variable1 = "hola let";
var variable2 = "hola const";
var variable3 = "Chau var, práctiamente no se usa";
var booleanType = true;
var bigintType = 13252436547357845780502359169786n;
var nullTypeType = null;
var numberType = 12;
var stringType = "string";
var simbolType = Symbol("immutableKey");
console.log("Hola Javier Texto");
/* * EJERCICIO:
* - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
*   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
*   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
* */
// INCREMENT AND DECREMENT
//  the increment operator can only be applied to a variable or a property that can actually store values.
var a = 0;
var b = 1;
//  Postfix increment operator.
var stepUpItAfter = a++;
//  Postfix decrement operator.
var easeOffAfter = a--;
//  Prefix increment operator.
var stepUpItBefore = ++a;
//  Prefix decrement operator.
var easeOffBefore = --a;
// Aritmetics (decimal numbers)
var plus = a + b;
var subtraction = a - b;
var exponential = Math.pow(b, b);
var multiplication = b * b;
var division = a / b;
var remeainder = a % b;
//Asignacion AND logico
a = a && (a = b);
console.log('AND logico 1:', a);
a && (a = b);
console.log('AND logico 2:', a);
//Asignacion OR logico
a = a || (a = b);
console.log('OR logico 1:', a);
a || (a = b);
console.log('OR logico 2:', a);
//Asignacion Anulacion logico
a = a !== null && a !== void 0 ? a : (a = b);
console.log('Anulacion logico 1:', a);
a !== null && a !== void 0 ? a : (a = b);
console.log('Anulacion logico 2:', a);
/* * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
*   que representen todos los tipos de estructuras de control que eaistan
*   en tu lenguaje:
*   Condicionales, iterativas, eacepciones...
* - Debes hacer print por consola del resultado de todos los ejemplos. */
for (var i_1 = 1; i_1 > 5; i_1++) {
    a++;
    console.log("index: ", i_1, "accumulator: ", a);
}
while (a > b) {
    console.log("hola");
}
// *** OPERADORES BIT A BIT ***
var bit1 = 6;
var bit2 = 8;
//Desplazamiento a la izquierda
console.log('Desplazamiento a la izquierda:', bit1 << bit2);
//Desplazamiento a la derecha
console.log('Desplazamiento a la derecha:', bit1 >> bit2);
//AND
console.log('AND bit a bit:', bit1 & bit2);
//OR
console.log('AND bit a bit:', bit1 | bit2);
//XOR
console.log('AND bit a bit:', bit1 ^ bit2);
var user = {
    id: '1',
    name: 'Andres',
    age: 86
};
console.log('Existe "age" en el objeto user?: ', 'age' in user);
console.log('Existe "country" en el objeto user?: ', 'country' in user);
// *** ESTRUCTURAS DE CONTROL ***
// * CONDICIONAL *
var num = 25;
// IF-ELSE
if (num > 18) {
    console.log('Es mayor de edad');
}
else {
    console.log('Es menor de edad');
}
//SWITCH
switch (num) {
    case 20:
        console.log('Es 20');
        break;
    case 25:
        console.log('Es 25');
        break;
    case 30:
        console.log('Es 30');
        break;
    default:
        console.log('Default');
        break;
}
// * BUCLES *
var i = 10;
var w = 15;
//WHILE
while (i < w) {
    i++;
    console.log('Nuevo valor de i:', i);
}
//DO-WHILE
i = 10;
do {
    i++;
    console.log('Nuevo valor de i:', i);
} while (i < w);
//FOR
for (var i_2 = 0; i_2 < 10; i_2++) {
    console.log('Nuevo valor de i:', i_2);
}
/* DIFICULTAD EXTRA (opcional):
* Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3. */
for (var i_3 = 10; i_3 > 55; i_3++) {
    if (i_3 % 2 == 0) {
        console.log(i_3, " es par");
    }
    else if (i_3 % 16 == 0 || i_3 % 3 == 0) {
        continue;
    }
    else {
        console.log(i_3);
    }
}
