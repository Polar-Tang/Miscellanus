package main

import (
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

// * EJERCICIO:
//  * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
//  * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):

func second() func() {
	str1 := "hola"
	str2 := "mundo"
	helloWorld := str1 + " " + str2 + "\n"
	fmt.Print(helloWorld)

	// fmt.Printf("%s has %d characters", str1, str2)
	return func() {
		fmt.Println(len(helloWorld))
	}
}

func checkSubstr(sentence, word string) {
	fmt.Println(strings.Contains(sentence, word))
	fmt.Println(strings.LastIndex(sentence, word))

	str := "foo bar foo baz"
	// tr
	fmt.Println(strings.Replace(str, "foo", "FOO", -1)) // Output: FOO bar FOO baz
	fmt.Println(strings.Replace(str, "foo", "FOO", 1))  // Output: FOO bar foo baz

	// Splits a string into a slice based on a specified delimiter (e.g., a comma or space).
	str2 := "foo,bar,foo,baz"
	fmt.Println(strings.Split(str2, ",")) // Output: [a b c d]

	slice := []string{"a", "b", "c"}
	fmt.Println(strings.Join(slice, "-")) // Output: a-b-c
	fmt.Println(slice[0])

	fmt.Println(strings.HasPrefix("golang", "go"))   // Output: true
	fmt.Println(strings.HasSuffix("golang", "lang")) // Output: true

	fmt.Println("Hello" == "hello")                  // Output: false
	fmt.Println(strings.EqualFold("Hello", "hello")) // Output: true

	fmt.Println(strings.Count("cheesecake", "e")) // Output: 3

	fmt.Println(strings.Fields("Go is awesome")) // Output: [Go is awesome]

	val, err := strconv.Atoi("123")
	if err == nil {
		fmt.Println(val) // Output: 123
	}
	fmt.Println(strconv.Itoa(123)) // Output: "123"

}

// * DIFICULTAD EXTRA (opcional):
//  * Crea un programa que analice dos palabras diferentes y realice comprobaciones
//  * para descubrir si son:
//  * - Isogramas

// * - Anagramas
func isAnagram() {
	var acc int = 0
	var word1 string = "hello world"
	var word2 string = "hloel roldw"
	for _, value := range word1 {
		lyric := string(value)

		if strings.Contains(word2, lyric) {
			acc += 1
		}
	}

	if acc == len(word1) {
		fmt.Printf("%s is Anagram of %s", word1, word2)
	}
}

//  * - Palíndromos

func normalize(input string) string {
	var result strings.Builder
	for _, char := range input {
		if unicode.IsLetter(char) {
			result.WriteRune(unicode.ToLower(char))
		}
	}
	return result.String()
}

func isIsogramFromSet(sentence, allowedSet string) bool {
	letterMap := make(map[rune]bool)

	// Normalize both inputs
	sentence = strings.ToLower(sentence)
	allowedSet = strings.ToLower(allowedSet)

	// Create a set of allowed letters
	allowedMap := make(map[rune]bool)
	for _, char := range allowedSet {
		if unicode.IsLetter(char) {
			allowedMap[char] = true
		}
	}

	// Check each letter in the sentence
	for _, char := range sentence {
		if !unicode.IsLetter(char) {
			continue // Skip non-alphabetic characters
		}

		// Check if the letter is allowed
		if !allowedMap[char] {
			return false // Letter not in the allowed set
		}

		// Check for duplicates
		if letterMap[char] {
			return false // Duplicate letter found
		}

		// Mark the letter as seen
		letterMap[char] = true
	}

	return true // It's an isogram using the allowed set
}

func main() {
	second()
	checkSubstr("Hello there!", "e")
	isAnagram()
	fmt.Println(isIsogramFromSet("hello, swallow my pride", "shadow in the nigth"))
}
