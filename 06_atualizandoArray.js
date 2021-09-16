/* Atualizando elementos.

Crie uma lista de chamada com os seguintes alunos:
João, Ana, Caio, Lara, Marjorie, Leo.

Porém a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta aula. Atualize a lista. */

//1° Passo: declarar uma const com a lista de nomes em um array:
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
console.log(`Lista de chamada original: ${listaDeChamada}`)

//2° Passo: chamar o array, aplicar a função SPLICE, preencher os parâmetros:
listaDeChamada.splice(1,2,'Rodrigo')
/* Explicando os parâmetros de splice:
splice(posição do elemento que quero deletar, quantos elementos a partir desse indice irei deletar, caso queira adicionar algo)
1° Parâmetro: ANA está na primeira posição do array (lembrando que array começa em 0), 
2° Parâmetro: CAIO está logo após ela, então serão 2 elementos deletatos à partir do elemento 1,
3° Parâmetro: Adicionar RODRIGO. */
console.log(`Lista de chamada atualizada: ${listaDeChamada}`)
//Retorna: João,Rodrigo,Lara,Marjorie,Leo


/* Outro exercício:
Utilizando a lista de array original, adicionar o Daniel após a Ana, ou seja, 
que Daniel seja o terceiro nome da lista (2° posição no array) sem deletar ninguém da lista. 
PS: comentar o primeiro splice pra rodar esse segundo splice. */

//                    Na 2° posição do array,     não deleta ngm, a    diciona Daniel.
listaDeChamada.splice(2,0,'Daniel')
//console.log(`Lista de chamada atualizada sem deletar porém adicionando: ${listaDeChamada}`)
//Retorna: Lista de chamada atualizada sem deletar porém adicionando: João,Ana,Daniel,Caio,Lara,Marjorie,Leo