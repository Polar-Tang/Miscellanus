package main

import "fmt"

func xorEncrypt(data, key byte) byte {
	return data ^ key
}

func xor() {
	original := byte(42)                   // Example: The number 42
	key := byte(123)                       // Secret key
	encrypted := xorEncrypt(original, key) // Encrypt
	fmt.Println("Encrypted:", encrypted)

	decrypted := xorEncrypt(encrypted, key) // Decrypt
	fmt.Println("Decrypted:", decrypted)
}
