### **Primitive Data Types Summary**

| **Category** | **Type**                  | **Examples / Notes**                                        |
| ------------ | ------------------------- | ----------------------------------------------------------- |
| Boolean      | `bool`                    | `true`, `false`                                             |
| Integers     | `int`, `int8`, etc.       | Signed (`int`, `int8`, etc.) and unsigned (`uint`, `uint8`) |
| Floats       | `float32`, `float64`      | IEEE-754 floating-point numbers                             |
| Complex      | `complex64`, `complex128` | Complex numbers like `5 + 7i`                               |
| String       | `string`                  | UTF-8 encoded, immutable                                    |
| Special      | `byte` (`uint8`)          | Alias for `uint8`, often used for raw binary data           |
|              | `rune` (`int32`)          | Represents Unicode code points                              |
| Dynamic      | `interface{}`             | Can hold any value, requires type assertion to use          |