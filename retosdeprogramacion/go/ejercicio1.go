/*
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
package main

import "fmt"

func one() {
	const constante string = "Bye world"
	var variable string = "Hello world"
	fmt.Println(variable)

	/// VALUE TYPES ---------------------------------------------------------------------

	// NUMBER
	var a int = 42
	// UNICODE BASED
	var n uint8 = 255
	fmt.Println(a, n) // Outputs: 42 255

	// FLOAT
	var pi float64 = 3.14159
	fmt.Println(pi) // Outputs: 3.14159

	// COMPLEX NUMBER
	c := complex(5, 7) // Creates a complex number 5 + 7i
	fmt.Println(c)     // Outputs: (5+7i)

	// STRING
	var s string = "Hello world"
	fmt.Println(s) // Outputs: Hello world

	// BOOLEAN
	var b bool = true
	fmt.Println(b) // Outputs: true

	// INTERFACE
	var anything interface{}
	anything = 42
	fmt.Println(anything) // Outputs: 42

}
