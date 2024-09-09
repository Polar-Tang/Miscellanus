#  * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
#  * - Recuerda que todas las instrucciones de participación están en el
#  *   repositorio de GitHub.
# * Lo primero... ¿Ya has elegido un lenguaje?
#  * - No todos son iguales, pero sus fundamentos suelen ser comunes.
#  * - Este primer reto te servirá para familiarizarte con la forma de participar
#  *   enviando tus propias soluciones.
#  * EJERCICIO:
#  * - Crea un comentario en el código y coloca la URL del sitio web oficial del
#  *   lenguaje de programación que has seleccionado.
#  * - Representa las diferentes sintaxis que existen de crear comentarios
#  *   en el lenguaje (en una línea, varias...).
#  * - Crea una variable (y una constante si el lenguaje lo soporta).
#  * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
# : '' multiple lines
: '
  Este es un comentario 
  de varias lineas
'
#Variable just equal '='
variable=0
# readonly or declare
readonly='constante'

#  * - Crea variables representando todos los tipos de datos primitivos
#  *   del lenguaje (cadenas de texto, enteros, booleanos...).
#int
declare='constante'
declare -i var
var="10 + 5"
# printf "%d\n" "$var"  # Output: 15
# const
declare -r var="initial"
   var="changed"  # Error: var is read-only


declare -a=['array', 1, true]

# printf "Hello %s\n" "Nautilus"

: ' * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)'

# LIST
# A list is a sequence of one or more pipelines separated by one of the operators ‘;’, ‘&’, ‘&&’, or ‘||’, and optionally terminated by one of ‘;’, ‘&’, or a newline.

# The operators return a boolean
# OR
false || echo "This will run because the first command failed"

# AND
true && echo "This will run because the first command succeeded"


# Or operator takes the first trully and returns a trully, so this means 1 because is the succes status code
# if there's no trully it returns false, 0 which is a state exit status code 
# second comand is executed if it's truth
declare -i resultado
(( resultado = 0 || 1 ))  # 0 is false, so the result will be 1 (because 1 is true)
echo "$resultado"  # Output: 1

# the and operator
declare -i resultado
(( resultado = 1 && 1 ))  # Both are non-zero (true), so it evaluates to true (1)
echo "$resultado"  # Output: 1

#AND operator run on the backgroung

# ; semicolon run all comands
(echo "this will run " ; echo "also this" )

# pipe | The two commands connected by a pipe run in separate processes (subshells), but they are interdependent: the second command waits for the output of the first command, connection the output with the input after the pipe
# this anoying command make an ls an cat for every result
# ls | cat *

# ampersand & allows the parent shell to continue executing commands without waiting for the background process to complet, so runs the comman background within a subshell

sleep 10 &

## Addition, subtraction, multiplication, division, modulo
a=10
b=5

((sum = a + b))  # Addition
echo "Sum: $sum"

((difference = a - b))  # Subtraction
echo "Difference: $difference"

((product = a * b))  # Multiplication
echo "Product: $product"

((quotient = a / b))  # Division
echo "Quotient: $quotient"

((mod = a % b))  # Modulo
echo "Modulo: $mod"

# Comparison operators (return true or false)
x=10
y=20

(( x < y )) && echo "$x is less than $y"
(( x > y )) || echo "$x is not greater than $y"
(( x == 10 )) && echo "$x equals 10"
(( x != 5 )) && echo "$x is not equal to 5"

# Assignment operators
a=10
((a += 5))  # Increment by 5
echo "a after += 5: $a"

((a -= 2))  # Decrement by 2
echo "a after -= 2: $a"

((a *= 3))  # Multiply by 3
echo "a after *= 3: $a"

((a /= 4))  # Divide by 4
echo "a after /= 4: $a"

((a %= 3))  # Modulo by 3
echo "a after %= 3: $a"

# Bitwise AND, OR, XOR, NOT, shifts
x=6  # 6 in binary: 110
y=3  # 3 in binary: 011

((bitwise_and = x & y))  # Bitwise AND
echo "Bitwise AND of $x and $y: $bitwise_and"

((bitwise_or = x | y))  # Bitwise OR
echo "Bitwise OR of $x and $y: $bitwise_or"

((bitwise_xor = x ^ y))  # Bitwise XOR
echo "Bitwise XOR of $x and $y: $bitwise_xor"

((bitwise_not = ~x))  # Bitwise NOT
echo "Bitwise NOT of $x: $bitwise_not"

((left_shift = x << 1))  # Left shift
echo "Left shift of $x: $left_shift"

((right_shift = x >> 1))  # Right shift
echo "Right shift of $x: $right_shift"

# Identity-like operator for equality
str1="Hello"
str2="Hello"
[ "$str1" == "$str2" ] && echo "Strings are equal"

# Pattern matching with strings
text="Bash scripting is fun"
[[ $text == *"scripting"* ]] && echo "Text contains 'scripting'"

# Check membership in arrays
my_array=("apple" "banana" "cherry")
if [[ " ${my_array[@]} " =~ " banana " ]]; then
  echo "banana is in the array"
fi

# //   /* DIFICULTAD EXTRA (opcional):
# //   * Crea un programa que imprima por consola todos los números comprendidos
# //   * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
for[ 1 ]