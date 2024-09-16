// 1)
// Dado un array de números, escribir una función que calcule la suma de todos los números del array.
sum_arr = [1, 2, 3, 4, 5 ]

const reduce_sum = sum_arr.reduce((acc, currentValue) => acc = acc + currentValue, 0)
// console.log(reduce_sum)

// 2)
// Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
sum_str = ["banana", "lapiz", "cadera"]

const reduce_concat = sum_str.reduce((acc, currentValue) => acc = acc.concat(currentValue), "")
// console.log(reduce_concat)

// 3)
// Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

num_arr_gt_ten = [12, 6, 7, 29]

const gt_ten = num_arr_gt_ten.filter(num => num > 10)
console.log(gt_ten)

// 4)
// Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

const searching_for_pairs = sum_arr.reduce(
    (acc, currentValue) => {
        if(currentValue % 2 == 0){
            acc++
        } 
        return acc
    }
    )
console.log(searching_for_pairs)