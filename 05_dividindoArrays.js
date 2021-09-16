/*Dividindo um array em duas partes iguais.
Exemplo: uma sala de 20 alunos ficou muito grande, vamos dividi-la em 2 salas com tamanhos iguais: */

//1� Passo: declarar uma const com a lista de nomes em um array:
const nomes = ['Jo�o', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 
'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 
'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']
console.log("O tamanho do array �:", nomes.length)


/*2� Passo: declarar a const sala 1, atribuir o array 'nomes' utilizar o m�todo .slice que divide o array,
o slice pede alguns par�metros: (posi��o de in�cio do corte, nome do array.tamanho do array/quantas partes dividir) 
                                                         (0,       nomes  . lenght         / 2 ) 
Ou seja: o corte come�a na posi��o 0 e termina na posi��o 10, que � a metade do array de 20. */
const sala1 = nomes.slice(0,nomes.length/2)


/*3� Passo: declarar a const sala 2, atribuir o array 'nomes' utilizar o m�todo .slice que divide o array,
o slice pede alguns par�metros: (posi��o de in�cio do corte, nome do array.tamanho do array/quantas partes dividir) 
                                                         (nomes           .lenght         / 2 )                
j� cortamos da posi��o 0 na primeira sala, ent�o aqui n�o utilizaremos a posi��o 0, 
mas sim o final desse mesmo corte, que ser� NOMES.
O corte come�a na posi��o 10 e termina em 20, ou seja, 
inicia-se de onde o primeiro corte acabou e finaliza no fim do array, na posi��o 20. */
const sala2 = nomes.slice(nomes.length/2)


//4� Passo: Veridicar as salas:
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
