/* Com a m�dia de todos os alunos de 3 salas, 
calcule a m�dia geral de cada sala: */


//1� Passo: declarar os arrays das salas:
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

//2� Passo: criar uma func��o que tire a m�dia de todas ao mesmo tempo:
function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}
/*Traduzindo:
o par�metro "notasDaSala" ser� substitu�do pelo array desejado no console.log atrav�s do ();
o m�todo reduce faz um loop no array, ent�o ele precisa ter 2 par�metros, um acumulador e um atual,
o atual seria o n�mero declarado l� no array, 
o acumulador come�a em 0 para ser um n�mero neutro � princ�pio
para realizar a soma dos demais elementos dentro do array,
seria algo como colocar uma "let soma = 0" depois do array e antes da fun��o, caso n�o utilizar reduce;
se colocar um outro n�mero no valor de 0, como por exemplo o n�mero 10,
o acumulador come�aria com o primeiro elemento do array de JS com 17 + 8 + 8 + 7 + 10 etc.
o return pega o valor de const somaDasNotas e divide pelo notasDaSala.tamanho do array.
*/


/*3� Passo: chama a fun��o "mediaSala" com ${} e descreve qual array a fun��o ser� aplicada dentro do (),
o nome declarado dentro do () ser� o substitutivo do "notasDaSala" dentro da fun��o. */
console.log(`A m�dia da sala de JavaScript � ${mediaSala(salaJS)}`)
console.log(`A m�dia da sala de Java � ${mediaSala(salaJava)}`)
console.log(`A m�dia da sala de Python � ${mediaSala(salaPython)}`)




/* Outro exemplo para o m�todo reduce, trazendo o primeiro exerc�cio desenvolvido:
Tirar a m�dia de notas de um array. */

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5
          
const notas = [10, 6.5, 8, 7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A m�dia de notas em hardcode � ${media}`)

//Trazendo o mesmo c�digo para o reduce:

const notasReduce = [10, 6.5, 8, 7.5]

const mediaReduce = notasReduce.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(`A m�dia de notas com o m�todo reduce � ${mediaReduce}`)




//Outra forma de aplicar o m�todo reduce, situa��o com arrow function:

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(`O valor da soma �: ${soma}`) 

