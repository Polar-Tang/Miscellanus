// https://pentestgpt.ai/share/ab8edf63-b01e-4a90-8061-651a25569fb2
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
function functionExample1(mundo: string) {
    return "Hola " + mundo
}

console.log(functionExample1("javier "))

const functionExample2 = (mundo: string, nums: number[]) => { 
    console.log("hello " + mundo + " this is your number list " + nums )
 }

functionExample2("javier", [1,2,4,5])

/*  * - Comprueba si puedes crear funciones dentro de funciones.. 
https://retosdeprogramacion.com/roadmap/*/

const functionInsideFunction = () => {
    console.log("this is global")

    const functionInsider = () => { 
        console.log("This is inside")
     }
 }

// regular experssions
const obj = {
    name: "Object",
    method1: function () {
      console.log(this.name); // 'Object' (refers to obj)
    },
    method2: () => {
      // console.log(this.name); // 'undefined' or window (arrow function doesn't have its own `this`)
    }
  };
  
  obj.method1();  // Logs 'Object'
  obj.method2();  // Logs 'undefined' (or global scope in non-strict mode)
  

functionInsideFunction() // functionInsider is not called just because we call its daddy

const getRectArea = function (width: number, height: number) {
    return width * height;
  };

const getRectArea2 = (width: number, height:number) => { 
    return width * height;
 }

console.log(getRectArea(2,2))
console.log(getRectArea2(2,2))

console.log(this); // Refers to the global object (window in browser, global in Node.js)

// IIFE (Immediately Invoked Function Expression)
// 
const anonymousFunction = (function () {
    console.log("I am an IIFE!");
  })();
  

// arrow function
const arrowAnonymousFunction =  (() => {
    //
  })();

//   * DIFICULTAD EXTRA (opcional):
//   * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
//   * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
//   *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
//   *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
//   *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
//   *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
const dic = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}
const stringToNumber = (numA: string, numB: string) => { 

    for(let i = 1; i < 100; i++){
        if(dic.hasOwnProperty(numA) && dic.hasOwnProperty(numB)){
            const valueA = dic[numA]
            const valueB = dic[numB]
            
            if( i % valueA == 0){
                console.log(i, " es multiplo de ", valueA)
            } else if( i % valueB == 0){
                console.log(i, " es multiplo de ", valueB)
            }
        }

        console.log("el indice es este ", i)
    }
}
// console.log(stringToNumber("three", "four"))
// * EJERCICIO:
//  * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
//  *   en tu lenguaje.
//  * - Utiliza operaciones de inserción, borrado, actualización y ordenación.

// PRIMITIVE DATA ----------------------------------------------------------------
// NUMBER
let num: number = 42;

// STRING
let str: string = "Hello, World!";

// BOOLEAN
let isDone: boolean = false;

// BIGINT
// let big: bigint = 100000000000000000000000000000000n;

// NULL
let nothing: null = null;
let notDefined: undefined = undefined;

// ARRAYS ------------------------------------------------------------------
// Simple Array
let numbers: number[] = [1, 2, 3];

// GENERIC ARRAY
let fruits: Array<string> = ["apple", "banana", "orange"];

// -----------------------
// TUPLE
let tuple: [string, number] = ["age", 25];

// OPTIONAL TUPLE
let optionalTuple: [string, number?] = ["age"];

// OBJECTS ------------------------------------
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30,
  };

// INTERFACE
interface Person {
    name: string;
    age: number;
  }
  let alice: Person = { name: "Alice", age: 30 };

// MAP
let map = new Map<string, number>();
map.set("one", 1);
map.set("two", 2);

// SET
let set = new Set<number>();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added again.

// RECORD
let userScores: Record<string, number> = {
    Alice: 95,
    Bob: 85,
  };

// ENUMS ----------------------------------
enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  let dir: Direction = Direction.Up;

// SRTING ENUM
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
  }

// WEAK MAP && WEAK SET
let weakMap = new WeakMap<object, string>();
let objectMapExample = {};
weakMap.set(objectMapExample, "value");
// WEAK SET
let weakSet = new WeakSet<object>();
let obj2 = {};
weakSet.add(obj2);

// FUNCTIONS
function add(a: number, b: number): number {
    return a + b;
  }

// ARROW
const multiply = (x: number, y: number): number => x * y;

// UNION INTERCEPTION TYPES ------------------
let value: string | number;
value = "hello";
value = 123;

// INTERSEPTION TYPES -------------------------
type A = { a: string };
type B = { b: number };
let ab: A & B = { a: "hello", b: 123 };

// ANY && UNKOWN ------------------------
let anything: any = "hello";
anything = 123;

let something: unknown = "hello";
if (typeof something === "string") {
  console.log(something.toUpperCase());
}

// NULL
let empty: null = null;

// UNDEFINED
let uninitialized: undefined = undefined;

// NEVER
function throwError(message: string): never {
    throw new Error(message);
  }
  
// GENERICS
function identity<T>(arg: T): T {
    return arg;
  }

// CLASSES AND INTERFACES
class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  interface Car {
    make: string;
    model: string;
  }
  

// * DIFICULTAD EXTRA (opcional):
// * Crea una agenda de contactos por terminal.
// * - Debes implementar funcionalidades de búsqueda, inserción, actualización
// *   y eliminación de contactos.
// * - Cada contacto debe tener un nombre y un número de teléfono.
// * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
// *   y a continuación los datos necesarios para llevarla a cabo.
// * - El programa no puede dejar introducir números de teléfono no númericos y con más
// *   de 11 dígitos (o el número de dígitos que quieras).
// * - También se debe proponer una operación de finalización del programa.

// class User{
//     name : string
//     id : number
//     phone_number : number

//     constructor(name: string, id: number, phone_number: number){
//         this.name= name
//         this.id= id
//         this.phone_number = phone_number
//     }
// }

// const usuario_0 = new User("pedro", 1, 12312512)

// class HandleUser  {
//     users: User[]
//     id_counter: number
    
//     constructor(){
//         this.users = []
//         this.id_counter= 0
//     }
//     addUser(name: string, phone_number: number){
//         const new_user : User = new User(name, this.id_counter++, phone_number)
//         this.users.push(new_user)
//     }
//     deleteUser(name: string){
//         const find_user_by_index = this.users.findIndex(user => user.name === name)
//         if(find_user_by_index != -1){
//             this.users.splice(find_user_by_index, 1)
//         } else {
//             console.log("User not found")
//         }
//     }
// }
// const handle_user: HandleUser = new HandleUser()
// let always_terminal = prompt("Que operación quiere realizar?\ndel delete some user\nadd create a user\nstop stops this")  
// while(always_terminal){
//     if(always_terminal.includes("del")){
//         always_terminal = prompt(handle_user.users + " What of all these users do you wanna delete?")
//         handle_user.deleteUser(always_terminal)
//         continue
//     } else if(always_terminal.includes("add")){
//         always_terminal = prompt("Write number and phonenumber, in THAT order")
//         const [name, phone] = always_terminal.split(" ")
//         console.log(always_terminal)
//         handle_user.addUser(name, parseInt(phone))
//     } 
//     console.log(handle_user.users)
//     always_terminal = prompt("Que operación quiere realizar?\ndel delete some user\nadd create a user\nstop stops this")  
// }

// * EJERCICIO:
//  * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
//  * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
//  * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
//  *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
//  *   interpolación, verificación...
const paragraph = "lorem ipsum"

// ACCess to special characters
// console.log(paragraph.slice(0,2))
// Access to the character index
// console.log(paragraph.indexOf("lo"))
// search special characters
const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));
// substring
// console.log(paragraph.split(""))
console.log(String.fromCharCode(189, 43, 190, 61));
// length
paragraph.length
// concatenate
paragraph + " concatenate"
// repetition
console.log("a".repeat(10))

// route
// const each_lyric: string[] = paragraph.split("")
// each_lyric.forEach((lyric, index) => 
//   console.log("this the lyric ", lyric, " and its index is: ", index)
// )

// capital
paragraph.toUpperCase()
// lowercase
paragraph.toLocaleLowerCase()

// replace
paragraph.replace("ipsum", "ipso")

// union
paragraph.concat("!")

const age = 25;
const nameExample = "alice"

console.log(`My name is ${nameExample} and I am ${age} years old.`);

// verification

// if (paragraph.includes("lorem")){
//   console.log("INcluye la pabalabra lorem")
// } else{
//   console.log("ocurrtió un error")
// }

// interpolation


// * DIFICULTAD EXTRA (opcional):
// * Crea un programa que analice dos palabras diferentes y realice comprobaciones
// * para descubrir si son:
// * - Palíndromos

// console.log(firstArray.reverse().toString().replace(regexForTHis, ''))
const secondParagraph: string = "muspi merol"
const firstArray: string[] = paragraph.split("")
const secondArray: string[] = secondParagraph.split("")
const regexForTHis = /,/g;

// let isPalindrom = firstArray.reverse().toString() == secondArray.toString()

// if (isPalindrom){
//   console.log("Es un palindromo")
// }else {
//   console.log("Lo siento, no es un palindromo, lo lamento mucho")
// }

// * - Anagramas
// let isAnagram = firstArray.sort().toString() == secondArray.sort().toString()

// if (isAnagram){
//   console.log("Es un anagrama")
// }else {
//   console.log("Lo siento, no es un anagrama, lo lamento mucho")
// }

//  * - Isogramas
// let accNum = 0
// const firstArrayIterator = firstArray.values();
// let secondArraySorted = secondArray.sort()
// for (const value of firstArrayIterator) {
//   console.log(value)
//   // if (secondArray.includes(value)){
//   //   accNum++
//   // } else {
//   //   console.log("It's not an isogram")
//   // }
//   // console.log("purge")
// }
// console.log(accNum)
// if (accNum == firstArray.length){
//   console.log("it's an isogram")
// }

// * EJERCICIO:
//  * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
//  *   su tipo de dato.
//  * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
//  *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
//  * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)

let x = 10;
let y = x;  // y gets a *copy* of x's value

y = 20;

const somethinggg = () => {
  console.log("hola")
 }
console.log(somethinggg())
// reference by it value

let obj3 = Person;  // obj2 points to the same object as obj1

// obj2.name = "Bob";

// console.log(obj1.name);  // Output: "Bob" (both obj1 and obj2 reference the same object)
// console.log(obj2.name);  // Output: "Bob"


console.log(x);  // Output: 10 (x is unchanged)
console.log(y);  // Output: 20 (y is now 20)

let arr1 = [1, 2, 3];
let arr2 = arr1;  // Both arr1 and arr2 point to the same array

arr2.push(4);

console.log(arr1);  // Output: [1, 2, 3, 4]
console.log(arr2);  // Output: [1, 2, 3, 4]

// * EJERCICIO:
// * Entiende el concepto de recursividad creando una función recursiva que imprima
// * números del 100 al 0.
const hundredBackwards = (n: number) => {
  if( n <= 1){
    return 1
  }
  console.log(n);
  return hundredBackwards(n - 1)
 }
//console.log(hundredBackwards(100))

// * DIFICULTAD EXTRA (opcional):
//  * Utiliza el concepto de recursividad para:
//  * - Calcular el factorial de un número concreto (la función recibe ese número).

const factorial = (n: number) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
//console.log(factorial(10));
// 3628800

// * - Calcular el valor de un elemento concreto (según su posición) en la 
// *   sucesión de Fibonacci (la función recibe la posición).

const fibonacci = ( n:number ) => { 
  if (n <= 2){
    return 1
  } 
  return fibonacci(n - 1) + fibonacci(n - 2)
}
//console.log(fibonacci(7))

// * EJERCICIO:
//  * Implementa los mecanismos de introducción y recuperación de elementos propios de las
//  * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
//  * o lista (dependiendo de las posibilidades de tu lenguaje).

let string_list = ["patata", "zapatilla", "camello", "exersisios"]

// stacks
console.log("Quitar a la pila ",string_list.shift())
console.log("Agregar a la pila ",string_list.unshift())


// queue
console.log("Traer el último de la fila ",string_list.pop())
console.log("Agregar el último a la fila ", string_list.push("fritatas"))

// * DIFICULTAD EXTRA (opcional):
// * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
// *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
// *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
// *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
// *   el nombre de una nueva web.
// * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
// *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
// *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
// *   interpretan como nombres de documentos.
let frontButton: HTMLElement | null = document.getElementById("front")
let backButton: HTMLElement | null = document.getElementById("back")
let imageToLoad: HTMLElement | null = document.getElementById("image-to-load")

let imgArray = ["https://i.scdn.co/image/ab67616d0000b2730f9c31e98f195754525dc7f0", "https://upload.wikimedia.org/wikipedia/commons/3/3c/HF2022Megadeth_2.jpg", "https://es.concerts-metal.com/images/flyers/202311/1700661673--Tool---Tour-2024.webp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1QcGXqBUMUF_VekRVjQvIBZb1JGVvGa5XA&s" ]

let currentIndex = 0

const loadIMage = () => { 
  imageToLoad!.innerHTML= `<img style="width: 200px;" src=${imgArray[currentIndex]}/>`
 }

document.addEventListener('DOMContentLoaded', () => {
  loadIMage()
});

frontButton!.addEventListener("click", () => {
  currentIndex= (currentIndex + 1) % imgArray.length
  loadIMage()
})

backButton!.addEventListener("click", () => {
  currentIndex=(currentIndex - 1 + imgArray.length) % imgArray.length;
  loadIMage()
})

// * EJERCICIO:
// * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
// * atributos y una función que los imprima (teniendo en cuenta las posibilidades
// * de tu lenguaje).
// * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
// * utilizando su función.

// class MyObject {
//   nombre: string 
//   id: number 
//   usage: string

//   constructor(nombre: string, id: number, usage: string){
//     this.nombre = nombre
//     this.id = id
//     this.usage = usage
//   }
// }

// class HandleObject {
//   nombre: string 
//   id: number 
//   usage: string

//   constructor(my_object:MyObject){
//     this.nombre = my_object.nombre
//     this.id = my_object.id
//     this.usage = my_object.usage
//   }
// }

//   presentarObjet(nombre: string, id++, usage: string): void{
//     const nuevo_empleado = new MyObject(nombre, );

//   }
// }

// * EJERCICIO:
// * Explora el concepto de manejo de excepciones según tu lenguaje.
// * Fuerza un error en tu código, captura el error, imprime dicho error
// * y evita que el programa se detenga de manera inesperada.
// * Prueba a dividir "10/0" o acceder a un índice no existente
// * de un listado para intentar provocar un error.

try{
  const stackOverflow = (n: number) => { 
    // return stackOverflow(n - 1)
   }
} catch{
  console.log("Ilegal movement")
}
// 