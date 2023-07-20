/*
Solucion a ejercicio en el que se reciben dos numeros y se retona un numero compuesto
por la suma resta de ambos numeros y la suma de ambos.
Ej: Si se reciben los numeros 18 y 2 la resolucion seria esta:
    (18-2) = 16  :   (18+2) = 20 →  1620
*/ 
export function solution(num1, num2) {
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
export function solution(numbers) {

    let multiplicador = numbers[0] / 3;

    for (let i = 4; i <= 8; i++) {
        if (numbers[i -3 ] / i != multiplicador) {
            return false;
        }
    }
    return multiplicador;
}