/*
Solucion a ejercicio en el que se reciben dos numeros y se retona un numero compuesto
por la suma resta de ambos numeros y la suma de ambos.
Ej: Si se reciben los numeros 18 y 2 la resolucion seria esta:
    (18-2) = 16  :   (18+2) = 20 →  1620
*/ 
export function solution(num1, num2) {
    return parseInt(`${num1 - num2}${num1 + num2}`)
}