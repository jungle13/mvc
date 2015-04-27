/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcularIMC(altura, peso) {

    var imc;
    if ((altura !== "" || altura > 0 ) && ( peso !== "" || peso > 0)) {
       
        imc = peso / Math.pow(alturaEnMetros(altura), 2);
    }
    else {
        imc = 0;
    }

    return aproximar(imc,  2);

}

function determinarTipoPeso(imc) {

    if (imc <= 18.5) {
        return "Bajo peso";
    }
    if (imc > 18.5 && imc <= 25) {
        return "Peso saludable";
    }
    if (imc > 25 && imc <= 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

function calcularPesoIdeal(altura, sexo) {

    if (sexo === "Hombre") {
        return aproximar(((altura - 100) - (altura * 0.07)), 2);
    } else {
        //para mujeres y otros
        return aproximar(((altura - 100) - (altura * 0.1)), 2);
    }
}

function alturaEnMetros(altura_cm) {
    return (altura / 100);
}


function frecuenciaCardiaca(edad, sexo) {
    if (sexo === "Hombre") {
        return 220 - edad;
    } else {
        //para mujeres y otros
        return 226 - edad;
    }
}

function metabolismoBasal(peso, altura, sexo) {
    if (sexo === "Hombre") {
        return aproximar(((11.3 * peso) + (alturaEnMetros(altura) * 16) + 911), 2);
    } else {
        //para mujeres y otros
        return aproximar(((8.7 * peso) + (alturaEnMetros(altura) * 25) + 865), 2);
    }
}


/**
 * Metodo para calcular la edad de una persona, de acuerdo a su fecha de nacimiento
 * Tomado de https://dantotsuit.wordpress.com/category/programacion/javascript/calcular-edad-javascript-ddmmyyyy/
 * @param {Date} fecha
 * @returns Edad actual
 */
function calcular_edad(fecha) {
    var fechaActual = new Date()
    var diaActual = fechaActual.getDate();
    var mmActual = fechaActual.getMonth() + 1;
    var yyyyActual = fechaActual.getFullYear();

    FechaNac = fecha.split("-");
    var diaCumple = FechaNac[0];
    var mmCumple = FechaNac[1];
    var yyyyCumple = FechaNac[2];

//retiramos el primer cero de la izquierda
    if (mmCumple.substr(0, 1) == 0) {
        mmCumple = mmCumple.substring(1, 2);
    }
//retiramos el primer cero de la izquierda
    if (diaCumple.substr(0, 1) == 0) {
        diaCumple = diaCumple.substring(1, 2);
    }

    var edad = yyyyActual - yyyyCumple;

//validamos si el mes de cumpleaños es menor al actual
//o si el mes de cumpleaños es igual al actual
//y el dia actual es menor al del nacimiento
//De ser asi, se resta un año
    if ((mmActual < mmCumple) || (mmActual == mmCumple && diaActual < diaCumple)) {
        edad--;
    }

    return edad;
}


/**
 * Aproximar un valor con cierta cantidad de decimales
 * @param {Number} numero - Valor q se desea aproximar
 * @param {Number} cantd_decimales - cantidad de decimales que se desea conservar
 * @returns {Number} Devuelve el valor aproximado
 */
function aproximar (numero, cantd_decimales)
{
    var flotante = parseFloat(numero);
    var decimales = Math.pow(10, cantd_decimales);
    var resultado = Math.round(flotante * decimales) / decimales;
    
    return resultado;
}