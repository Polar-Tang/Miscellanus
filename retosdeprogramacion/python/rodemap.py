""" /*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */ """
""" https://retosdeprogramacion.com/roadmap/ """
""" 
# hola 
"COMENT"
hola = "hello world" 
numero = 12
float_number = 1,2
boolean = False

# sin valor
none = None
print(none) 


 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */ 

def Aritméticos():
    #suma
    suma = 1 + 1
    print("suma: ", suma)
    #resta
    resta = 1 - 1
    print("resta: ", resta)
    #multiplicacion
    multiplicacion = 1 * 1
    print("multiplicacion: ", multiplicacion)
    #division
    division = 1 / 1
    print("division: ", division)
    #modulo
    modulo = 1 % 1
    print("modulo: ", modulo)
    #exponente
    exponente = 1 ** 1
    print("exponente: ", exponente)
    #division entera
    divisionEntera = 1 // 1
    print("division entera: ", divisionEntera)

def Logicos():
    #and
    andLogico = True and True
    print("and: ", andLogico)
    #or
    orLogico = False or True
    print("or: ", orLogico)
    #not
    notLogico = not True
    print("not: ", notLogico)

def comparadores():
    o = 1 == 1 | False
    y = 1 == 1 & False
    distinto = 1 != 1
    igual = 1 == 1

def identidad():
    #is
    isIdentidad = 1 is 1
    print("is: ", isIdentidad)
    #is not
    isNotIdentidad = 1 is not 2
    print("is not: ", isNotIdentidad)

def pertenencia():
    #in
    inPertenencia = 1 in [1,2,3]
    print("in: ", inPertenencia)
    #not in
    notInPertenencia = 1 not in [1,2,3]
    print("not in: ", notInPertenencia)

def bits():
    #and
    andBits = 2 & 2
    print("and: ", andBits)
    #or
    orBits = 1 | 1
    print("or: ", orBits)
    #xor
    xorBits = 1 ^ 1
    print("xor: ", xorBits)
    #not
    notBits = ~ 1
    print("not: ", notBits)
    #desplazamiento a la izquierda
    desplazamientoIzquierda = 1 << 1
    print("desplazamiento a la izquierda: ", desplazamientoIzquierda)
    #desplazamiento a la derecha
    desplazamientoDerecha = 1 >> 1
    print("desplazamiento a la derecha: ", desplazamientoDerecha)

# CONDICIONALES

def iterativas():
    #for
    for i in range(0,10):
        print("for")
    #while
    while True:
        print("while")
        break 

def process_input():
    while True:
        try:
            x = int(input("Please enter a number: "))
        except ValueError:
            print("Oops!  That was no valid number.  Try again...")

    # Now let's enforce a rule using `raise`
    if x < 0:
        raise ValueError("Negative numbers are not allowed")
    
    print("You entered a valid number:", x) """


# DIFICULTAD EXTRA (opcional):
# * Crea un programa que imprima por consola todos los números comprendidos
#* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
# *
# * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo. 

""" def extraDificulty():
    for i in range(10,56):
        if i % 3 != 0 and i != 16:
            print(i)
print(extraDificulty()) """

""" * EJERCICIO: """
"""  * - Crea ejemplos de funciones básicas que representen las diferentes """
"""  *   posibilidades del lenguaje: """
"""  *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno... """
"""  * - Comprueba si puedes crear funciones dentro de funciones. """
"""  * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje. """
"""  * - Pon a prueba el concepto de variable LOCAL y GLOBAL. """
"""  * - Debes hacer print por consola del resultado de todos los ejemplos. """
"""  *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades) """

def function2():
    while True:
        try:
            name = input("What's your name? ")
            nickname = input("And what's your nickname? ")
            if name == "jack" and nickname == "ripper":
                raise Exception("We're gonna lead you to jail right now!")
        except Exception as e:
            print(e)
            continue  # Stop the loop after handling the exception
        finally:
            print("Hello " + name + " " + nickname)

def function3(x):
    x **=  5
    print(x) 


""" DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda. """

def number_to_string(a,b):  #receive two argument
    count_a = 0 
    count_b = 0 
    numbers = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six" : 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    num_a = numbers.get(a,"Uknown") #Get the any value of the list. Recive a keyname and value if it the keyname isn't found
    num_b = numbers.get(b,"Uknown")

    if isinstance(num_a, int) and isinstance(num_b, int): # this will check if the parameter it's a number
        if num_a % 3 == 0 or num_b % 3 == 0:
            print(f"One of the numbers is divisible by 3: num_a = {num_a}, num_b = {num_b}")
 
        for i in range(1,100):
            if i == num_a:
                count_a += 1
            if i == num_b:
                count_b += 1
        print(f"the number {num_a} displays {count_a}, and the number {num_b} displays {count_b}")
# print(number_to_string("two","six"))

# --------------------------------------------------------------------------------------------------------
""" * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación. """
# Listas SON COMO ARRAYS
my_list = []    # Constructor
my_other_list = list()  # Constructor
my_list.append("manzana")   # Inserción
my_list.extend(["pera","uva"])  # Inserción
# print(my_list)
del my_list[1]  # Borrado
# # print(my_list)
#my_list.remove("uva")   # Borrado
# print(my_list)
my_list[0] = "lechuga"  # Actualización
# print(my_list)
my_list.extend(["tomate","queso","mortadela","mayonesa"])
#print(my_list)
my_list.sort()  # Ordenación
# print(my_list)

# Tuplas SON LISTAS INMUTABLES
my_tuple = ()   # Constructor
my_other_tuple = tuple()    # Constructor
my_thrith_tuple = 10, 2, 1  # Constructor
my_fourth_tuple = ("Lunes", "Miercoles", "Viernes")  # Constructor
# print(type(my_thrith_tuple))
# print(my_thrith_tuple[2])   # Acceso
my_thrith_tuple = tuple(sorted(my_thrith_tuple))    # Ordenación
# print(my_thrith_tuple)
# print(type(my_thrith_tuple))

# Conjuntos/Sets
my_set = set() # Constructor
my_other_set = {1,"Ottawa","Roma"}  # Constructor
# print(my_other_set)
my_other_set.add("Madrid")  # Inserción
# print(my_other_set)
my_other_set.remove(1)  # Borrado
# print(my_other_set)
my_other_set = set(sorted(my_other_set))    # No se puede ordenar por definición
# print(my_other_set)
# print(type(my_other_set))

# Diccionarios
my_dict = dict()
my_other_dict = {}
my_thrith_dict = {
    "english":"hello world!",
    "español":"¡Hola mundo!"
}
# print(my_thrith_dict)
my_thrith_dict["Deutsch"] = "Hallo Welt"   # Inserción
# print(my_thrith_dict)
my_thrith_dict["Deutsch"] = "Hallo Welt!"   # Actualización
# print(my_thrith_dict)
del my_thrith_dict["Deutsch"]   # Actualización
# print(my_thrith_dict)
my_thrith_dict = dict(sorted(my_thrith_dict.items())) # Ordenación
# print(my_thrith_dict)
# print(type(my_thrith_dict))

""" * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa. """
contacts_list = {}
def agenda():
    print("We're go to create contacts for the agend. This will be ask for contacts undefenilly untill you write 'NO'")
    while True:
        try:
            contact_name = input(f"What's the name of this contact?")
            if contact_name.lower() == "no":
                break
            contact_phone = input("What's the phone number of your contact?")
            if contact_name.lower() == "no":
                break
            contacts_list[contact_name] = contact_phone
            print(f"Contact {contact_name} added successfully!")
        except Exception as e:
            print(f"An error has occurred: {e}")
            break
    while True:
        print(contacts_list)
        help_options = input(f"You can see the contact list by writting 's', delete by writting 'd', and also update it with 'u'")
        if help_options == "u":            
            whichUpdate = input("Which you want to update?")
            if whichUpdate in contacts_list:
                whatUpdate = input("What you wanna change?")
                contacts_list[whichUpdate] = whatUpdate
                print(f"The changes have made {contacts_list}")
            else:
                print(f"No contact found with the name: {whatUpdate}")
        elif help_options == "s":
            print(f"These are our contact list {contacts_list}")
        elif help_options == "d":
            whatDelete = input("What contact do you want to delete?")
            if whatDelete in contacts_list:
                del contacts_list[whatDelete]
                print(f"{whatDelete} has been deleted successfully")
            else:
                print("Cannot find that name on the list")
        else:
            print("Invalid option. Please try again.")
        
        continue_prompt = input("Do you want to continue managing contacts? (yes/no): ").strip().lower()
        if continue_prompt == "no":
            break

""" * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación... """
"""
Operaciones
"""

s1 = "Hola"
s2 = "Python"

# Concatenación
# print(s1 + ", " + s2 + "!")

# Repetición
# print(s1 * 3)

# Indexación
# print(s1[0] + s1[1] + s1[2] + s1[3])

# Longitud
# print(len(s2))

# Slicing (porción)
# print(s2[2:6])
# print(s2[2:])
# print(s2[0:2])
# print(s2[:2])

# Busqueda
# print("a" in s1)
# print("i" in s1)

# Reemplazo
# print(s1.replace("o", "a"))

# División
# print(s2.split("t"))

# Mayúsculas, minúsculas y letras en mayúsculas
# print(s1.upper())
# print(s1.lower())
# print("brais moure".title())
# print("brais moure".capitalize())

# Eliminación de espacios al principio y al final
# print(" brais moure ".strip())

# Búsqueda al principio y al final
# print(s1.startswith("Ho"))
# print(s1.startswith("Py"))
# print(s1.endswith("la"))
# print(s1.endswith("thon"))

s3 = "Brais Moure @mouredev"

# Búsqueda de posición
# print(s3.find("moure"))
# print(s3.find("Moure"))
# print(s3.find("M"))
# print(s3.lower().find("m"))

# Búsqueda de ocurrencias
# print(s3.lower().count("m"))

# Formateo
# print("Saludo: {}, lenguje: {}!".format(s1, s2))

# Interpolación
# print(f"Saludo: {s1}, lenguje: {s2}!")

# Tranformación en lista de caracteres
# print(list(s3))

# Transformación de lista en cadena
l1 = [s1, ", ", s2, "!"]
# print("".join(l1))

# Transformaciones numéricas
s4 = "123456"
s4 = int(s4)
# print(s4)

s5 = "123456.123"
s5 = float(s5)
# print(s5)

# Comprobaciones varias
s4 = "123456"
# print(s1.isalnum())
# print(s1.isalpha())
# print(s4.isalpha())
# print(s4.isnumeric())

"""  * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas """
""" w1 = "hola"
w2 = "aloh"
palindrome = w1[::-1] 
anagram = sorted(w1) == sorted(w2)

is_w1_isogram  = len(set(w2)) == len(w1)
is_w2_isogram = len(set(w2)) == len(w2)

# Print Results
if anagram:
    print(f"{w2} is an anagram of {w1}")
elif w2 == palindrome:
    print(f"{w2} is a palindrome of {w1}")

if is_w1_isogram and is_w2_isogram:
    print(f"Both {w1} and {w2} are isograms.")
elif is_w1_isogram:
    print(f"{w1} is an isogram.")
elif is_w2_isogram:
    print(f"{w2} is an isogram.")
else:
    print(f"Neither {w1} nor {w2} are isograms.") """

""" * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes) """
# Tipos de dato por valor

my_int_a = 10
my_int_b = my_int_a
my_int_b = 20
# my_int_a = 30
# print(my_int_a)
# print(my_int_b)

# Tipos de dato por referencia

my_list_a = [10, 20]
my_list_b = my_list_a
my_list_b.append(30)
# print(my_list_a)
# print(my_list_b)

""" * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras. """
# inmutable
def modify_value(x):
    x = x + 10
    print(f"Inside function: x = {x}")

my_int = 5
#modify_value(my_int)
#print(f"Outside function: my_int = {my_int}")

# mutable
def modify_list(list):
    list.append(4)
    print(f"Inside function: {list}")

#my_list = [1,2,3]
#modify_list(my_list)
#print(f"This is the outside list {my_list}")

# make a shallow copy of a mutable
def modify_list(lst):
    lst.append(4)
    print(f"Inside function: lst = {lst}")

my_list = [1, 2, 3]
#modify_list(my_list[:])  # Passing a copy of the list using slicing
#print(f"Outside function: my_list = {my_list}")

""" * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0. """

# BACKWARDS
""" for i in range(99, -1, -1):
    print("This is the number " + str(i)) """

""" * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición). """
acc = 1
acc2= 0

""" # FACTORIAL
for i in range(1,6):
    acc *= i 
print("Factorial: ",acc) """

# FIBONACCI
""" for i in range(1,5):
    acc = acc + acc2
    acc2 = acc + acc2  
    print("Fibonacci: acc ",acc)
    print("Fibonacci: acc2 ",acc2) """

"""  * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje). """

def stack_and_queue():
    dictionary = {0:"i was the first", 1: "still waiting", 2: "third places are cool", 3: "Hey, I'm here, Hello!" }
    print("We're go to create contacts for the agend. This will be ask for contacts undefenilly untill you write 'NO'")

    while True:
        print(contacts_list)
        help_options = input(f"You can retrieve something like a stack 's', or like a queue 'q', to see the list press 'l'")
        if help_options == "s":            
            print(dictionary)
            whichUpdate = int(input("Here's the dictionary, if the index which you say exists you will chage it, if it's not you will add it "))
            whatUpdate = input("Say you want to add/change ")
            if isinstance(whatUpdate, int):
                dictionary[whichUpdate] = whatUpdate
                print(f"The changes have made {dictionary}")
            else:
                dictionary[whichUpdate] = whatUpdate
                print(f"The changes have madeeeeee {dictionary}")
        elif help_options == "q":
            queue = input(f"This will always change the last index ")
            last_key_value = list(my_dict.keys())[-1]
            dictionary[last_key_value] = queue
            print(f"The changes have madeeeeee {dictionary}")
        elif help_options == "l":
           print(dictionary)
        else:
            print("Invalid option. Please try again.")
        
        continue_prompt = input("Do you want to continue managing contacts? (yes/no): ").strip().lower()
        if continue_prompt == "no":
            break 