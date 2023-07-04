
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