//Consolidando o aprendizado em callback


 const nomes = ["Ana", "Ju", "Leo", "Paula"]

 //variavel.metodo(function)
 nomes.forEach(ImprimeNomes)

 function ImprimeNomes(nome) {
     console.log(nome)
 }


/* Neste caso, declaramos um array, 
chamamos o array no forEach que chama a fun��o ImprimeNomes.

O par�metro dentro do forEach s� ir� funcionar se for uma function.
As vezes temos mais de um array,
podemos utilizar a mesma fun��o para outro array se escrever a fun��o fora do forEach */





