/*
Solucion a ejercicio en el que se reciben dos numeros y se retona un numero compuesto
por la suma resta de ambos numeros y la suma de ambos.
Ej: Si se reciben los numeros 18 y 2 la resolucion seria esta:
    (18-2) = 16  :   (18+2) = 20 →  1620
*/ 
export function numeroCombinado(num1, num2) {
    return parseInt(`${num1 - num2}${num1 + num2}`)
}

/*
Solucion a ejercicio en que recibimos un array de numeros y se retorna el numero por el
que si multiplicamos del 3 al 8 obtenemos los resultados del array. Em caso de algun
resultado posea un multiplicador diferente a los demas resutados del array se retorna false
Ej: si recibimos el array [27, 36, 45, 54, 63, 72] el valor retornado seria 9 ya que:
    3 * 9 =  27
    4 * 9 =  36
    5 * 9 =  45
    6 * 9 =  54
    7 * 9 =  63
    8 * 9 =  72
En cambio si recibimos el array [27, 36, 45, 54, 42, 72] el valor retornado es false ya que:
    3 * 9 =  27
    4 * 9 =  36
    5 * 9 =  45
    6 * 9 =  54
    7 * 6 =  42 *el multiplicador es diferente al de los demas resultados 
    8 * 9 =  72
*/ 
export function multiplicadorComun(numbers) {

    let multiplicador = numbers[0] / 3;

    for (let i = 4; i <= 8; i++) {
        if (numbers[i -3 ] / i != multiplicador) {
            return false;
        }
    }
    return multiplicador;
}

/* 
Solucion al ejercicio en el que una funcion recibe un numero y se retorna la cantidad de pasos necesarios
para simplificarlo a un uno. La simplificacion se debe hacer con las siguientes reglas:
    -Si el numero es par se debe de dividir entre 2
    -Si el numero es impar se debe restarle o sumarle 1
*/
export function pasosHastaUno(num) {

    let cantidadPasos = 0;

    if(num === 0){return 0}

    while (num != 1) {
        cantidadPasos++;

        if (num % 2 == 0) {
            num /= 2;
        } else if (((num - 1) / 2) % 2 == 0) {
            num--;
        }  else {
            num++;
        }
    }
    
    return cantidadPasos;
}


/*
Solucion al ejercicio en el que una funcion recibe un numero como paramtro y retorna un arreglo con todo los
numero primos iguales o menores al numero recibido como parametro
*/ 
export function numPrimos(num) {
    let arregloPrimos = [];

    for (let i = 2; i <= num; i++){
        let primo = false;

        if (i != 1 ) {
            let raizCuadrada = Math.round( Math.sqrt(i) );

            for (let j = 2; j <= raizCuadrada; j++){

                if (i % j == 0) {
                    primo = true
                    break;
                }
            }
        
        }
        if (primo == false) {
            arregloPrimos.push(i);
        }
    }
    return arregloPrimos;
}