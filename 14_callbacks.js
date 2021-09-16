//Consolidando o aprendizado em callback


 const nomes = ["Ana", "Ju", "Leo", "Paula"]

 //variavel.metodo(function)
 nomes.forEach(ImprimeNomes)

 function ImprimeNomes(nome) {
     console.log(nome)
 }


/* Neste caso, declaramos um array, 
chamamos o array no forEach que chama a função ImprimeNomes.

O parâmetro dentro do forEach só irá funcionar se for uma function.
As vezes temos mais de um array,
podemos utilizar a mesma função para outro array se escrever a função fora do forEach */





