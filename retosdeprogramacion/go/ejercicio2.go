package main

import (
	"errors"
	"fmt"
)

func exercise2() {
	// Arithmetic
	a, b := 10, 3
	fmt.Println("Addition:", a+b)
	fmt.Println("Subtraction:", a-b)
	fmt.Println("Multiplication:", a*b)
	fmt.Println("Division:", a/b)
	fmt.Println("Modulus:", a%b)

	// Logical
	fmt.Println("AND:", true && false)
	fmt.Println("OR:", true || false)
	fmt.Println("NOT:", !true)

	// Comparison
	fmt.Println("Equal:", a == b)
	fmt.Println("Not Equal:", a != b)
	fmt.Println("Greater Than:", a > b)
	fmt.Println("Less Than:", a < b)
	fmt.Println("Greater or equal than:", a <= b)
	fmt.Println("Less or equal than:", a >= b)

	// Assignment
	a += 5
	fmt.Println("Add and Assign:", a)
	a -= 5
	fmt.Println("Rest and Assign:", a)
	a *= 5
	fmt.Println("Multiplication and Assign:", a)
	a /= 5
	fmt.Println("Division and Assign:", a)
	a %= 5
	fmt.Println("Modulus and Assign:", a)

	// Bitwise
	fmt.Println("AND:", a&b)          // Outputs: 1 (001)
	fmt.Println("OR:", a|b)           // Outputs: 7 (111)
	fmt.Println("XOR:", a^b)          // Outputs: 6 (110)
	fmt.Println("AND NOT:", a&^b)     // Outputs: 4 (100)
	fmt.Println("Left Shift:", a<<1)  // Outputs: 10 (1010)
	fmt.Println("Right Shift:", a>>1) // Outputs: 2 (10)
	// BONUS (subneting)

	// Membership
	mySlice := []int{1, 2, 3}
	found := false
	for _, v := range mySlice {
		if v == 2 {
			found = true
		}
	}
	fmt.Println("Membership:", found)

}

// Utilizando las operaciones con operadores que tú quieras, crea ejemplos
//  *   que representen todos los tipos de estructuras de control que existan

// *   en tu lenguaje:
// *   Condicionales,
func gt(a, b int) string {
	if a > b {
		return fmt.Sprintf("%d is greater than %d", a, b)
	} else if a < b {
		return fmt.Sprintf("%d is less than %d", a, b)
	}
	return fmt.Sprintf("%d is equal to %d", a, b)
}

///iterativas, excepciones...

func fors() {
	// c-like iteration
	for i := 0; i < 5; i += 1 {
		fmt.Println("The current value is", i)
	}

	// iterete for a string
	for index, char := range "Hello, 🌍!" {
		fmt.Printf("Index: %d, Rune: %q\n", index, char)
	}

	// iterate for a slice
	data := []string{"Alice", "Bob", "Charlie"}
	for index, value := range data {
		fmt.Printf("Index %d, Value %s\n", index, value)
	}
}

func keepgo() {
	// for breaks
	for i := 0; i < 10; i++ {
		if i%2 == 0 {
			continue // Skip even numbers
		}
		if i > 5 {
			break // Stop the loop if i > 5
		}
		fmt.Println("Odd number:", i)
	}
}

// exceptions
func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("division by zero") // Return an error
	}
	return a / b, nil // No error
}

func defering() {
	defer fmt.Println("This runs last, even after a return.") // Deferred statement
	fmt.Println("This runs first.")
	return
}

func panicAndRecover() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from panic:", r)
		}
	}()

	fmt.Println("Before panic.")
	panic("Something went terribly wrong!") // Triggers a panic
	fmt.Println("After panic.")             // This won't execute
}

/*
* DIFICULTAD EXTRA (opcional):
* Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

func extraDificulty() {
	for i := 0; i < 55; i += 1 {
		if i%2 == 0 {
			fmt.Printf("The iteration is: %d is pair\n", i)
			continue
		} else if i%2 == 1 {
			fmt.Printf("The iteration is: %d is odd\n", i)
			continue
		} else if i%15 == 0 {
			fmt.Printf("The iteration is: %d it's multiple of 15 too\n", i)
			continue
		}
	}
}

// func main() {
// 	extraDificulty()
// }

// func broadcast(ip, mask uint32) uint32 {
// 	return ip | (^mask) // OR the IP with the inverted mask
// }
