/* Padronizar a lista de alunos para conter apenas letras maiúsculas: 
ana Julia, Caio vinicius, BIA silva. */

//1° Passo: declara array dos nomes
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//2° Passo: declara uma const chamando o array.map e puxa uma arrow function c/ o método toUpperCase
const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

//3° Passo: Imprime a lista atualizada
console.log(nomesAtualizados)

/*  método forEach não tem um retorno;
    método map() pode retornar um array se a função informada tiver um return em seu escopo; */ 