//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Hola familia de F5😁')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = 'Hola'
let number = 1
let boolean = true
let nullValue = null
let undefinedValue = undefined
let object = {}
let array = []



console.log(string, number, boolean, nullValue, undefinedValue, object, array)


//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number1 = 1
let number2 = 1
let sumaNumber = number1 + number2
console.log(sumaNumber)


//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

number1 = 20
number2 = 5
let restarNumber = number1 - number2
console.log(restarNumber)


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

number1 = 1
number2 = 8
let multiplicarNumber = number1 * number2
console.log(multiplicarNumber)


//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

number1 = 2
number2 = 2
let dvidirNumber = number1 / number2
console.log(dvidirNumber)


//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let var1 = 1;
let var2 = 2;
let varComaparacion = (var1 == var2);
console.log(varComaparacion);


// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let varComaparacion2 = (var1 != var2);
console.log(varComparison2);

//Ejercicio 10: completa el ejercicio
let num1 = 15
let num2 = 20

let comparacion = (num1 != num2);
console.log(comparacion)

//Ejercicio 11: completa el ejercicio


//Ejercicio 11: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = (typeof(num3) == typeof(num3AsString));
console.log(result);

//Ejercicio 12: completa el ejercicio

let result2 = (num3 == num3AsString);
console.log(result2);


//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "Sergio"
console.log(nombre);



//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1;
console.log(res); // true

let res2 = a < 10 && b < 1;
console.log(res2); // false

let res3 = a == 5 || b == 5;
console.log(res3); // false

let res4 = a == 6 || b == 0;
console.log(res4); // true

let res5 = a == 0 || b == 3;
console.log(res5); // true

let res6 = a == 6 && b == 3;
console.log(res6); // true
