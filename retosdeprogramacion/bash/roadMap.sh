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

# EXECUTE THE COMAN ON THE BACKGROUND

# EJECUTA SECUENCIALMENTE

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


