/* Atualizando elementos.

Crie uma lista de chamada com os seguintes alunos:
Jo�o, Ana, Caio, Lara, Marjorie, Leo.

Por�m a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta aula. Atualize a lista. */

//1� Passo: declarar uma const com a lista de nomes em um array:
const listaDeChamada = ['Jo�o', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
console.log(`Lista de chamada original: ${listaDeChamada}`)

//2� Passo: chamar o array, aplicar a fun��o SPLICE, preencher os par�metros:
listaDeChamada.splice(1,2,'Rodrigo')
/* Explicando os par�metros de splice:
splice(posi��o do elemento que quero deletar, quantos elementos a partir desse indice irei deletar, caso queira adicionar algo)
1� Par�metro: ANA est� na primeira posi��o do array (lembrando que array come�a em 0), 
2� Par�metro: CAIO est� logo ap�s ela, ent�o ser�o 2 elementos deletatos � partir do elemento 1,
3� Par�metro: Adicionar RODRIGO. */
console.log(`Lista de chamada atualizada: ${listaDeChamada}`)
//Retorna: Jo�o,Rodrigo,Lara,Marjorie,Leo


/* Outro exerc�cio:
Utilizando a lista de array original, adicionar o Daniel ap�s a Ana, ou seja, 
que Daniel seja o terceiro nome da lista (2� posi��o no array) sem deletar ningu�m da lista. 
PS: comentar o primeiro splice pra rodar esse segundo splice. */

//                    Na 2� posi��o do array,     n�o deleta ngm, a    diciona Daniel.
listaDeChamada.splice(2,0,'Daniel')
//console.log(`Lista de chamada atualizada sem deletar por�m adicionando: ${listaDeChamada}`)
//Retorna: Lista de chamada atualizada sem deletar por�m adicionando: Jo�o,Ana,Daniel,Caio,Lara,Marjorie,Leo