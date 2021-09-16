/* Padronizar a lista de alunos para conter apenas letras mai�sculas: 
ana Julia, Caio vinicius, BIA silva. */

//1� Passo: declara array dos nomes
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//2� Passo: declara uma const chamando o array.map e puxa uma arrow function c/ o m�todo toUpperCase
const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

//3� Passo: Imprime a lista atualizada
console.log(nomesAtualizados)

/*  m�todo forEach n�o tem um retorno;
    m�todo map() pode retornar um array se a fun��o informada tiver um return em seu escopo; */ 