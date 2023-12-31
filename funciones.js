
/*PRACTICA # 1:\n */

/*\nRequerimientos: Crear una función que imprima si el nombre es corto si tiene menos de 5 letras e imprima tu nombre es largo si tiene más de 5 caracteres*/
console.log("EJERCICIO 1 Versión 1\n")
console.log('\nREQUERIMIENTOS:\n Crear una función que imprima si el nombre es corto si tiene menos de 5 letras\n e imprima tu nombre es largo si tiene más de 5 caracteres\n');
function fullName(name) {
  let counterName = name.length;
  if (counterName > 5) {
      return "\nTu nombre " + name + " es largo por que tiene " + counterName + " caracteres\n";
  } else {
      return "\nTu nombre " + name + " es corto por que tiene " + counterName + "caracteres\n";
  }
}
console.log(fullName("Libardo"));
console.log(fullName("Pedro"));
console.log(fullName("Ana"));
console.log(fullName("Parangaricutirimicuaro"));

/*Practica 1 optimizada*/
console.log("EJERCICIO 1 Versión 2 Optimizada\n")
const fullName2 = (name2) => {
    let counterName = name2.length;
    return (counterName > 5) ? "\nTu nombre " + name2 + " es largo por que tiene " + counterName + " caracteres\n" 
                            : "\nTu nombre " + name2 + " es corto por que tiene " + counterName + "caracteres\n";
  console.log(fullName2("Libardo"));
}
console.log(fullName2("Libardo"));
console.log(fullName2("Pedro"));
console.log(fullName2("Ana"));
console.log(fullName2("Parangaricutirimicuaro"));

/*PRACTICA # 2*/
console.log("\nEJERCICIO 2 Versión 1\n")
console.log('\n REQUERIMIENTOS: Crear una función que reciba 2 números y me devuelva un texto con base en las condiciones siguientes\n:si el resulta es par, devovler "tu resultado es par" \nsi es non, devolver "el resultado es non"');
function pairwiseSorter (num1, num2){
    let sumPairs = num1 + num2;
    if((sumPairs % 2) === 0){
        return "\nLa suma de " + num1 + " + " + num2 + "es igual a " + sumPairs + "\n El resultado es un numero par."
    }else{
        return "\nLa suma de " + num1 + " + " + num2 + "es igual a " + sumPairs + "\n El resultado es un numero non."
    }
}

/*PRACTICA # 3*/
/*Practica # 3 Versión 1 */
console.log("\nEJERCICIO 3\n");
console.log('\n REQUERIMIENTOS: 3.- Crear una función que reciba el nombre y apellidos de una persona \ny me devuelva la cantidad de caracteres de el nombre completo\n');
function counterName(firstname, lastname){
    let fusionName = firstname + " " + lastname;
    console.log("\nEl numero de caracteres de " + fusionName + " es de:\n ");
    conterCaracterName = fusionName.length;
    return conterCaracterName;
}
console.log(counterName("Sergio", "Perez"));
console.log(counterName("El chavo", "del ocho"));
console.log(counterName("El canelo", " "));



/*PRACTICA # 4: */
/*DIFERENTES VERSIONES DE UN MISMO REQURIMIENTO*/
console.log("\nPRACTICA 1 del LUNES 3 de JULIO TAREA 4 del CURSO\n ")
console.log('\n"REQUERIMIENTOS:  Necesitamos saber de cualquier string,\nel caracter que se encuentre en cualquier posición que indiquemos\n si la posición excede la cantidad de caracteres, indicar que no es posible ejecutar el ejercicio"');

/*1era versión-original: El index regresa un valor vacio el cual tomo de condicionante para regresar el mensaje de no encontrado*/
function enumeraterStrings(string, index) {
    let finderCharacters = string.charAt(index);
    if (finderCharacters === "") {
        return "\nEl index de la cadena de caracteres " + string + " esta fuera del rango \n";
    } else {
        return finderCharacters;
    }
}
console.log (enumeraterStrings("murcielago",10));

/*2a Versión del requerimiento resumido en Función Flecha: (pero no se como poner el if en flecha para simplificarlo)*/
const enumeraterStringsarrow = (string2, index2) => string2.charAt(index2);
console.log(enumeraterStringsarrow("murcielago", 5));


/*3a Versión de la Función flecha con la opción if */
const enumeraterStringsarrowif = (string3, index3) => {
    let finderCharacters3 = string3.charAt(index3);
    if (finderCharacters3 === "") {
        return "El index de la cadena de caracteres " + string3 + " esta fuera del rango";
    } else {
        return finderCharacters3;
    }
}
console.log (enumeraterStringsarrowif("murcielago", 10));

/*4a Versión DIFERENTE ENFOQUE: Los mismos requerimientos pero esta ves sera pensando en el numero de caracteres y no en el valor de chartAt*/
function enumeraterStrings4(string4, index4){
    let caracterString4 = string4.length;
    if ((index4 + 1) > caracterString4){
        return "El index de la cadena de caracteres " + string4 + " esta fuera del rango";        
    }else{
        let finderCharacters4 = string4.charAt(index4);
        return finderCharacters4;
    }    
}
console.log(enumeraterStrings4("murcielago", 6));

/*5a Versión La función anterior en versión flecha*/
const enumeraterStrings5 = (string5, index5) => {
    let caracterString5 = string5.length;
    if((index5 +1) > caracterString5){
        return  "El index de la cadena de caracteres " + string5 + " esta fuera del rango";        
    }else{
        let finderCharacters5 = string5.charAt(index5);
        return finderCharacters5
    }
}
console.log(enumeraterStrings5("murcielago", 10));

/*6a Versión: tomada de la versión 3 pero más simplificada*/
const enumeraterStringsarrowif6 = (string6, index6) => 
(string6.charAt(index6) === "") ? "El index" + index6 + " de la cadena de caracteres " + string6 + " esta fuera del rango"
: "El caracter que ocupa el index: " + '"' + index6 + '"' + " dentro del string " + '"' + string6 + '"' + "\nLo tiene el caracter " + '"' +string6.charAt(index6) + '"';  
console.log (enumeraterStringsarrowif6("murcielago", 6));

console.log("\nEjercicio 4 Versión 7\n");
const checkChartAtposition = (namer, numerpos) => {
    return namer[numerpos] ? "El index " + numerpos + " de la cadena de caracteres " + namer + " está dentro del rango"
                           : "El caracter que ocupa el index: " + '"' + numerpos + '"' + " dentro del string " + '"' + namer + '"' + "\nLo tiene el caracter " + '"' + namer.charAt(numerpos) + '"';
  };
  
  console.log(checkChartAtposition("santiago", 3));
  

/*PRACTICA 5:.2.- Necesitamos saber si un texto cualquiera tiene dentro otro string
        "Israel" "ra" - si lo incluye
        "Israel" "ac" - no lo incluye"*/

console.log('PRACTICA 5 "REQUERIMIENTOS:\n"Necesitamos saber si un texto cualquiera tiene dentro otro string. \nEJEMPLO:\n"Israel" "ra" - si lo incluye \n"Israel" "ac" - no lo incluye\n\n"');
/*Versión 1 Practica 5*/
function characterFinder(name, char){
    let charIncluded = name.includes(char);
    if(charIncluded){
        return "Tu string " + '"'+ char +'"' + " se encuentra dentro de la cadena de caracteres " + '"' + name + '"' 
    }else{
        return "Tu string " + '"'+ char +'"'+ " NO se encuentra dentro de la cadena de caracteres " + '"'  + name + '"' 
    }
}
console.log(characterFinder("Libardo", "do"));
console.log(characterFinder("Libardo", "Liba"));
console.log(characterFinder("Libardo", "tu"));

/*Versión 2 Practica 5 Arrow verse */
const characterFinder2 = (name2, char2) =>{
    let charIncluded2 = name2.includes(char2);
    if(charIncluded2){
        return "Tu string " + '"'+ char2 +'"' + " se encuentra dentro de la cadena de caracteres " + '"' + name2 + '"' 
    }else{
        return "Tu string " + '"'+ char2 +'"'+ " NO se encuentra dentro de la cadena de caracteres " + '"'  + name2 + '"' 
    }
}
console.log(characterFinder2("Libardo", "ba"));
console.log(characterFinder2("Libardo", "rdo"));
console.log(characterFinder2("Libardo", "tata"));


/*Versión 3 Practica 5 Arrow verse*/

const characterFinder3 = (name3, char3) => name3.includes(char3)
    ? "Tu string " + '"'+ char3 +'"' + " se encuentra dentro de la cadena de caracteres " + '"' + name3 + '"' 
    : "Tu string " + '"'+ char3 +'"'+ " NO se encuentra dentro de la cadena de caracteres " + '"'  + name3 + '"'; 

console.log(characterFinder3("Libardo", "ti"));
console.log(characterFinder3("Libardo", "ardo"));
console.log(characterFinder3("Libardo", "Liba"));


/*PRATICA 6: Necesito saber la cantidad de palabras de un texto cualquiera*/
console.log("PRACTICA 6: Necesito saber la cantidad de palabras de un texto cualquiera\n");

/*Versión 1 de la practica 6*/
function wordCounter(word){
let totalWord = (word.length);
return "El total de los caracteres de la palabra " + word + " es de " + totalWord + " caracteres";
}
console.log(wordCounter("libardo"));

/*Versión 2 de la practica 6, versión flecha*/
const wordCounter2 = (word2) => {
    let word2length = word2.length;
    return "El total de los caracteres de la palabra " + word2 + " es de " + word2length + " caracteres";
  };  
  console.log(wordCounter2("libardo"));
  console.log(wordCounter2("Paracaidas"));
  console.log(wordCounter2("carro"));
  
  /*Practica 7*/
  /*  4.- Necesito reemplazar todas las coincidencias de una palabra dentro de un texto, con otro texto
        "mi perro es gris y es un latoso" "es" "no es"
             "mi perro no es gris y no es un latoso"*/
/*Versión 1 Practica 7*/
console.log('"PRACTICA 7:Necesito reemplazar todas las coincidencias de una palabra dentro de un texto, con otro texto \n ejemplo: mi perro es gris y es un latoso" \n"es" "no es"     "mi perro no es gris y no es un latoso"')
let phrase = "Mi perro es gris y es un latoso\n";
console.log(phrase);
function changePhrase(oldword, newword){
phrase = (phrase.replaceAll(oldword, newword));
return phrase;
}
console.log(changePhrase("es", "no es"));
console.log(changePhrase("perro", "gato"));
console.log(changePhrase("gato", "loro"));
console.log(changePhrase("loro", "guacamaya"));
console.log(changePhrase("guacamaya", "perro"));

/*Versión 2 Arrow verse Practica 7*/
console.log('"PRACTICA 7 Versión Arrow \n"');
let phrase2 = "Mi perro es gris y es un latoso\n";
console.log(phrase2);
const changePhrase2 = (oldword2, newword2) => phrase2.replaceAll(oldword2, newword2);

console.log(changePhrase2("es", "no es"));
console.log(changePhrase2("perro", "gato"));
console.log(changePhrase2("gato", "loro"));
console.log(changePhrase2("loro", "guacamaya"));
console.log(changePhrase2("guacamaya", "perro"));
