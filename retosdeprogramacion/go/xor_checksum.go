package main

import "fmt"

func calculateChecksum(data []byte) byte {
	checksum := byte(0)
	for _, b := range data {
		checksum ^= b // XOR all bytes together
	}
	return checksum
}

func checksum() {
	data := []byte{10, 20, 30, 40}
	checksum := calculateChecksum(data)
	fmt.Println("Checksum:", checksum)
}
