# TypeScript
- - -
# Interface
In TypeScript, an `interface` is used to define the **shape** or structure of an object. It specifies the **types** of the properties an object should have
- - -
# Classes
the **structure** and **behavior** of an object.
```Ts
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
```
**Creating an Instance of the Class**:
```Ts
const user: User = new UserAccount("Murphy", 1);
```

# JavaScript
## Symbol
newer data type primitive which is inmutable and isn't repeateble
**Well-known symbols**
they are built-in functions to customize the symbol behaviour
- **`Symbol.iterator`**: Defines the default iterator for an object.
- **`Symbol.toStringTag`**: Allows you to customize the default string description of an object.
- **`Symbol.hasInstance`**: Customizes how `instanceof` behaves for objects.

## Logic Operators
the increment&decrement operator can only be applied to a **variable** or a **property** that can actually store values.