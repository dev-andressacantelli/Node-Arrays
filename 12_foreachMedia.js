/* Calcular a média entre as seguintes notas usando o forEach:10,6.5, 8 e 7.5

FOREACH -> Método chamado de callback,
pois o parâmetro passado é uma função que chama outra função. */

//1° Passo: declarar as notas em um array
const notas = [10, 6.5, 8, 7.5]

/*2° Passo: declarar uma variável fora do bloco de execução do laço,
que guarde um valor específico. Se essa variável for declarada dentro do laço,
ela será reescrita com um valor diferente cada vez que o laço for executado. */
let somaDasNotas = 0

//3° Passo: começar o loop com arrow function:
notas.forEach(nota => {
    somaDasNotas += nota
})
/*Traduzindo:
Para cada (nota) de uma array de notas. executar o bloco {
    0 += nota até terminar o array
} 

É possivel executar o 3° passo com uma função tradicional:
notas.forEach(function(nota){
    somaDasNotas += nota
}) 

4° Passo: 
declarar uma variável que guarda o resultado do bloco de notas
executado dentro do loop e dividi-lo pelo tamanho do array. */
let media = somaDasNotas/notas.length

//5°Passo: imprimir media
console.log(media)

