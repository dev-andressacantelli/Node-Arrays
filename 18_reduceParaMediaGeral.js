/* Com a média de todos os alunos de 3 salas, 
calcule a média geral de cada sala: */


//1° Passo: declarar os arrays das salas:
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

//2° Passo: criar uma funcção que tire a média de todas ao mesmo tempo:
function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}
/*Traduzindo:
o parâmetro "notasDaSala" será substituído pelo array desejado no console.log através do ();
o método reduce faz um loop no array, então ele precisa ter 2 parâmetros, um acumulador e um atual,
o atual seria o número declarado lá no array, 
o acumulador começa em 0 para ser um número neutro à princípio
para realizar a soma dos demais elementos dentro do array,
seria algo como colocar uma "let soma = 0" depois do array e antes da função, caso não utilizar reduce;
se colocar um outro número no valor de 0, como por exemplo o número 10,
o acumulador começaria com o primeiro elemento do array de JS com 17 + 8 + 8 + 7 + 10 etc.
o return pega o valor de const somaDasNotas e divide pelo notasDaSala.tamanho do array.
*/


/*3° Passo: chama a função "mediaSala" com ${} e descreve qual array a função será aplicada dentro do (),
o nome declarado dentro do () será o substitutivo do "notasDaSala" dentro da função. */
console.log(`A média da sala de JavaScript é ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é ${mediaSala(salaPython)}`)




/* Outro exemplo para o método reduce, trazendo o primeiro exercício desenvolvido:
Tirar a média de notas de um array. */

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5
          
const notas = [10, 6.5, 8, 7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média de notas em hardcode é ${media}`)

//Trazendo o mesmo código para o reduce:

const notasReduce = [10, 6.5, 8, 7.5]

const mediaReduce = notasReduce.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(`A média de notas com o método reduce é ${mediaReduce}`)




//Outra forma de aplicar o método reduce, situação com arrow function:

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(`O valor da soma é: ${soma}`) 

