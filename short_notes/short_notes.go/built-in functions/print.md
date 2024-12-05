### **Differences Between `print`, `println`, and `fmt.Printf`**

| **Function**  | **Description**                                                                 | Retun value                                |
| ------------- | ------------------------------------------------------------------------------- | ------------------------------------------ |
| `print`       | Prints a string to stdout without a newline. Minimal formatting support.        | string                                     |
| `println`     | Prints a string to stdout **with a newline**. Still minimal formatting support. | **Nothing** (void, no return value).       |
| `fmt.Printf`  | Allows rich, **formatted strings** with placeholders like `%d`, `%s`, etc.      | **Number of bytes written** and **error**. |
| `fmt.Println` | Prints values separated by spaces and ends with a newline.                      | **Number of bytes written** and **error**. |
| `fmt.Sprintf` | Like `Printf`, but returns the formatted string instead of printing it.         | **Formatted string**.                      |

#### Example:

```go
print("Hello") // Outputs: Hello
println("Hello") // Outputs: Hello (with a newline)
fmt.Printf("Number: %d\n", 42) // Outputs: Number: 42
fmt.Println("Number:", 42) // Outputs: Number: 42
fmt.Sprintf("Number: %d", 42) // Returns the string: "Number: 42"
```

---
### Sprintf
It's a formating string in python or backsticks in JS, i mean it's for easily include variables with strings.

#### Common Format Specifiers:

|**Specifier**|**Description**|**Example**|
|---|---|---|
|`%d`|Integer (decimal)|`42`|
|`%s`|String|`"Alice"`|
|`%f`|Floating-point|`3.14159`|
|`%t`|Boolean|`true`|
|`%x`|Hexadecimal representation|`2a` (for 42)|
### Return value
- The number of bytes written to the output.
- Any error encountered during the print operation.