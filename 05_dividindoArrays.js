/*Dividindo um array em duas partes iguais.
Exemplo: uma sala de 20 alunos ficou muito grande, vamos dividi-la em 2 salas com tamanhos iguais: */

//1° Passo: declarar uma const com a lista de nomes em um array:
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 
'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 
'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']
console.log("O tamanho do array é:", nomes.length)


/*2° Passo: declarar a const sala 1, atribuir o array 'nomes' utilizar o método .slice que divide o array,
o slice pede alguns parâmetros: (posição de início do corte, nome do array.tamanho do array/quantas partes dividir) 
                                                         (0,       nomes  . lenght         / 2 ) 
Ou seja: o corte começa na posição 0 e termina na posição 10, que é a metade do array de 20. */
const sala1 = nomes.slice(0,nomes.length/2)


/*3° Passo: declarar a const sala 2, atribuir o array 'nomes' utilizar o método .slice que divide o array,
o slice pede alguns parâmetros: (posição de início do corte, nome do array.tamanho do array/quantas partes dividir) 
                                                         (nomes           .lenght         / 2 )                
já cortamos da posição 0 na primeira sala, então aqui não utilizaremos a posição 0, 
mas sim o final desse mesmo corte, que será NOMES.
O corte começa na posição 10 e termina em 20, ou seja, 
inicia-se de onde o primeiro corte acabou e finaliza no fim do array, na posição 20. */
const sala2 = nomes.slice(nomes.length/2)


//4° Passo: Veridicar as salas:
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
