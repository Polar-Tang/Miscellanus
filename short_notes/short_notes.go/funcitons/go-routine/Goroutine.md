A **goroutine** is Go's way of enabling **lightweight concurrency**. It’s like a thread but managed by the Go runtime rather than the operating system. Goroutines allow you to execute functions **asynchronously** and **concurrently**.
- **Without `go`**: The program runs sequentially.
- **With `go`**: `printMessage("Goroutine Call")` runs concurrently.
##### For example
```go
go func(file api.FileInfo) {
    // Function body
}(fileInfo) // Argument passed here
```
- The part `func(file api.FileInfo)` defines an **anonymous function** that accepts an argument of type `api.FileInfo`.
- At the end, `(fileInfo)` **calls the anonymous function** with `fileInfo` as the argument.