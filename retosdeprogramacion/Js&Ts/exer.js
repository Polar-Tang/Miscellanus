// 20)Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos
//obtenerMenor(5, 7, 99, 34, 54, 2, 12)
//2
var arr = [255, 7, 99, 34, 54, 2, 12];
var getFewerNumber = function (arr) {
    var tiny = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr.at(0)) {
            tiny = arr[i];
        }
        if (tiny > arr[i]) {
            tiny = arr[i];
        }
    }
    return tiny;
};
// console.log(getFewerNumber(arr))
// 21)Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos.
//sumar([5, 7, 10, 12, 24])
//58
var sumar = function (arr) {
    var total = arr.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
    return total;
};
// console.log(sumar(arr))
// 22)Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.
//contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
//false
// no funktion
// console.log(arr.includes(2))
// 23)Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
//gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
//false
var slotMachine = ['⭐', '⭐️', '⭐️', '⭐️', '⭐️'];
var win = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr.at(i - 1)) {
            return false;
        }
    }
    return true;
};
console.log(win(slotMachine));
