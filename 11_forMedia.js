// Calcular a média entre as seguintes notas usando o for: 10, 6.5, 8 e 7.5 

//1° Passo: declarar as notas em um array:
const notas = [10, 6.5, 8, 7.5]

/*2° Passo: declarar uma variável fora do bloco de execução do laço,
que guarde um valor específico. Se essa variável for declarada dentro do laço,
ela será reescrita com um valor diferente cada vez que o laço for executado. */
let somaDasNotas = 0

//3° Passo: começar o loop:
//                   notas.4(tamanho do array)
for (let i = 0;  i < notas.length;  i++) {
    somaDasNotas += notas[i];
}
/* Traduzindo:
enquanto o i for menor que o valor de notas.tamanho do array,
incrementa ++ uma vez no laço.

No bloco de execução:
somaDasNotas += notas[i]; 
A cada vez que passar pelo laço,
soma na variável da direita, o valor que estiver na esquerda
Acessando a variável notas no índice [i],
repetindo o laço até alcançar o valor do array, que é 4.


4° Passo: 
declarar uma variável que guarda o resultado do bloco de notas
executado dentro do loop e dividi-lo pelo tamanho do array. */
let media = somaDasNotas/notas.length

//5°Passo: imprimir media
console.log(media)