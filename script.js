console.log("Bienvenid@s a los ejercicios de JS")

// Declara una variable llamada "nombre" y asígnale tu nombre
let nombre ='Juan Carlos';
console.log(nombre);
// Declara una variable llamada "edad" y asígnale tu edad
let edad = 35;
console.log(edad);
// Declara una variable llamada "ciudad" y asígnale el nombre de tu ciudad
let ciudad = 'Valencia';
console.log(ciudad);
// Declara dos variables numéricas y realiza una suma
let num1 = 5;
let num2 = 8;
let sum = num1 + num2;
console.log.apply(sum);
// Declara una variable numérica y otra de texto, y concaténalas
let num3 = 40;
let text = 'No quiero cumplir ';
let mensajeImportante = text + num3;
console.log(mensajeImportante);
// Declara una variable y asígnale un valor inicial
let inicial = 5;
// Incrementa el valor de la variable en 1 y muestra el resultado
inicial += 1;
console.log(inicial);
// Cambia el valor de la variable a otro número y muestra el resultado
inicial = 80;
console.log(inicial);
// Crea un array de números
let arrayNum = [40, 7, 30, 25, 99];
console.log(arrayNum);
// Crea un array de strings
let arrayText = ['Pepe', 'Juan', 'Carlos', 'Jose', 'Misoginia en los textos'];
console.log(arrayText);
// Crea un array mixto
let arrayMix = [30, 70, 'Londres', 44, 'Madrid'];
console.log(arrayMix);
// Accede al primer elemento del array "numeros"
console.log(arrayNum[0]);
// Accede al tercer elemento del array "frutas"
console.log(arrayText[2]);
// Modifica el segundo elemento del array "numeros"
arrayNum[1] = 80;
console.log(arrayNum[1]);
// Modifica el último elemento del array "frutas"
arrayText[4] = 'Ya no puedo hacer política';
console.log(arrayText[4]);
// Agrega un nuevo elemento al final del array "numeros"
arrayNum.push(77);
console.log(arrayNum);
// Agrega un nuevo elemento al principio del array "frutas"
arrayText.unshift('Realmente no soy un Array de frutas');
console.log(arrayText);
// Elimina el último elemento del array "numeros"
arrayNum.pop();
console.log(arrayNum);
// Elimina el primer elemento del array "frutas"
arrayText.shift();
console.log(arrayText);
