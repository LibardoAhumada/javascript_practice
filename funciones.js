
/*PRACTICA # 4: DIFERENTES VERSIONES DE UN MISMO REQURIMIENTO*/
console.log("REQUERIMIENTOS: 1.- Necesitamos saber de cualquier string,\nel caracter que se encuentre en cualquier posición que indiquemos\n si la posición excede la cantidad de caracteres, indicar que no es posible ejecutar el ejercicio")

/*1era versión-original: El index regresa un valor vacio el cual tomo de condicionante para regresar el mensaje de no encontrado*/
function enumeraterStrings(string, index) {
    let finderCharacters = string.charAt(index);
    if (finderCharacters === "") {
        return "El index de la cadena de caracteres " + string + " esta fuera del rango";
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



/*PRACTICA 5:.2.- Necesitamos saber si un texto cualquiera tiene dentro otro string
        "Israel" "ra" - si lo incluye
        "Israel" "ac" - no lo incluye"*/

console.log('PRACTICA 5 "REQUERIMIENTOS:\n"Necesitamos saber si un texto cualquiera tiene dentro otro string. \nEJEMPLO:\n"Israel" "ra" - si lo incluye \n"Israel" "ac" - no lo incluye\n\n"');
/*Versión 1*/
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

/*Versión 2 Arrow verse*/
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


/*Versión 3 Arrow verse*/

const characterFinder3 = (name3, char3) => name3.includes(char3)
    ? "Tu string " + '"'+ char3 +'"' + " se encuentra dentro de la cadena de caracteres " + '"' + name3 + '"' 
    : "Tu string " + '"'+ char3 +'"'+ " NO se encuentra dentro de la cadena de caracteres " + '"'  + name3 + '"'; 

console.log(characterFinder3("Libardo", "ti"));
console.log(characterFinder3("Libardo", "ardo"));
console.log(characterFinder3("Libardo", "Liba"));

