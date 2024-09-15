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

# Functions
**def**
	set of statemens that perform a task or calculate a value that comes fron an input and give you an output. To use a function you need to call somewhere from the scope you wish to call
### parameters
A list of parameters to the function, enclosed in parentheses and separated by commas. If the function chhange de paramte's properties these change globally
```ts
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

```

### Also functions can be defined as a [function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
```ts
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

```
These have their own this context

### Arrow function
```ts
const getRectArea2 = (width: number, height: number) => width * height;
```

### IIFE
An **IIFE** is a function that **invokes itself automatically** right after its definition
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