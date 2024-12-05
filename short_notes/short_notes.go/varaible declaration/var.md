You've already seen `var`, which lets you declare a variable with or without an initial value:

- With explicit type:
    
    ```go
    var name string = "Alice"
    ```
    
- With type inferred:
    
    ```go
    var age = 30 // Go infers type as int
    ```
    
- Without initialization (zero value is assigned):
    
    ```go
    var isReady bool // Default: false
    var count int    // Default: 0
    ```
    
