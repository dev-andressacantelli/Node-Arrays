// Calcular a m�dia entre as seguintes notas usando o for: 10, 6.5, 8 e 7.5 

//1� Passo: declarar as notas em um array:
const notas = [10, 6.5, 8, 7.5]

/*2� Passo: declarar uma vari�vel fora do bloco de execu��o do la�o,
que guarde um valor espec�fico. Se essa vari�vel for declarada dentro do la�o,
ela ser� reescrita com um valor diferente cada vez que o la�o for executado. */
let somaDasNotas = 0

//3� Passo: come�ar o loop:
//                   notas.4(tamanho do array)
for (let i = 0;  i < notas.length;  i++) {
    somaDasNotas += notas[i];
}
/* Traduzindo:
enquanto o i for menor que o valor de notas.tamanho do array,
incrementa ++ uma vez no la�o.

No bloco de execu��o:
somaDasNotas += notas[i]; 
A cada vez que passar pelo la�o,
soma na vari�vel da direita, o valor que estiver na esquerda
Acessando a vari�vel notas no �ndice [i],
repetindo o la�o at� alcan�ar o valor do array, que � 4.


4� Passo: 
declarar uma vari�vel que guarda o resultado do bloco de notas
executado dentro do loop e dividi-lo pelo tamanho do array. */
let media = somaDasNotas/notas.length

//5�Passo: imprimir media
console.log(media)