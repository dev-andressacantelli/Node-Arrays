/* Calcular a m�dia entre as seguintes notas usando o forEach:10,6.5, 8 e 7.5

FOREACH -> M�todo chamado de callback,
pois o par�metro passado � uma fun��o que chama outra fun��o. */

//1� Passo: declarar as notas em um array
const notas = [10, 6.5, 8, 7.5]

/*2� Passo: declarar uma vari�vel fora do bloco de execu��o do la�o,
que guarde um valor espec�fico. Se essa vari�vel for declarada dentro do la�o,
ela ser� reescrita com um valor diferente cada vez que o la�o for executado. */
let somaDasNotas = 0

//3� Passo: come�ar o loop com arrow function:
notas.forEach(nota => {
    somaDasNotas += nota
})
/*Traduzindo:
Para cada (nota) de uma array de notas. executar o bloco {
    0 += nota at� terminar o array
} 

� possivel executar o 3� passo com uma fun��o tradicional:
notas.forEach(function(nota){
    somaDasNotas += nota
}) 

4� Passo: 
declarar uma vari�vel que guarda o resultado do bloco de notas
executado dentro do loop e dividi-lo pelo tamanho do array. */
let media = somaDasNotas/notas.length

//5�Passo: imprimir media
console.log(media)

