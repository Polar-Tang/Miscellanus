package main

import "fmt"

/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// func noParam() {
// 	fmt.Println("Not return, no parms")
// }

func params(a int, b string, c int) (string, error) {
	if c == 0 {
		return "", fmt.Errorf("division by zero")
	}
	divideResult := a / c
	return fmt.Sprintf(
		"This must RETURN a string with mixed data types. Param %d was divided by %d, resulting in %d. The string param is '%s'.",
		a, c, divideResult, b), nil
}

/*
* - Comprueba si puedes crear funciones dentro de funciones.
 */

func outFunc() func() {
	fmt.Println("I'm the greater function")

	return func() {
		fmt.Println("Hello! I'm the smallest function returned as a closure")
	}
}

// BUILT-IN FUNCTIONS

func built_in() {
	// len(): Get the length of a slice or string
	mySlice := []int{1, 2, 3, 4}
	fmt.Println("Length of mySlice:", len(mySlice)) // Outputs: 4

	// append(): Add elements to a slice
	updatedSlice := append(mySlice, 5, 6)
	fmt.Println("Updated Slice:", updatedSlice) // Outputs: [1 2 3 4 5 6]

	// make(): Create a slice
	newSlice := make([]int, 3)          // Creates a slice of length 3 with zero values
	fmt.Println("New Slice:", newSlice) // Outputs: [0 0 0]

	// delete(): Remove an element from a map
	myMap := map[string]int{"Alice": 25, "Bob": 30}
	delete(myMap, "Alice")
	fmt.Println("Map after deletion:", myMap) // Outputs: map[Bob:30]
}

// * DIFICULTAD EXTRA (opcional):
//  * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
//  * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
//  *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
//  *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
//  *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
//  *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.

// func extraDificulty(a,b string){
// 	decimals := map[string]int{
// 		"one": 1,
//         "two": 2,
//         "three": 3,
//         "four": 4,
//         "five": 5,
//         "six" : 6,
//         "seven": 7,
//         "eight": 8,
//         "nine": 9,
// 	}
// 	fmt.Println(decimals)
// 	// for key, value := range decimals{
// 	// 	if decimals[key] string == a string {
// 	// 		fmt.Printf("We got the %s"key)
// 	// 	}
// 	// }
// }

// LOCAL VARIABLES

func myFunction() {
	localVar := "I am a local variable"
	fmt.Println(localVar)
}

// fmt.Println(localVar) // ERROR: localVar is not accessible here

var globalVar = "I am a global variable"

func printGlobal() {
	fmt.Println(globalVar)
}

func main() {

	built_in()

	outFunc()

	result, err := params(2, "Golang", 3)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Result:", result)

	result, err = params(10, "GoLang", 0)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(result)
}
