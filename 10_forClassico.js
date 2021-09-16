/* Imprima o índice e a lista com os números: 100,200,300,400,500,600 */

const numeros = [100, 200, 300, 400, 500, 600]

//                         variavel.tamanho
for (let index = 0; index < numeros.length; index++){
    console.log(index, numeros[index])
}
// Traduzindo: enquanto o index for menor que o tamanho do meu array numeros, que vale 6, incrementa + 1.



//Outro exemplo de loop:

for (let i = 0; i <= 10; i++){
    console.log(i)
   }


/* Como funciona os parâemtros de um for:

    let i = 0 -> valor que o index passará para a verificação;
    i <= 10; -> condição de parada;
    i++      -> incremento, ou, variável de controle;
    

Exemplos de for errado, laço infinito:
 

Faltando o terceiro parâmetro, 
responsável por alterar a variável de controle 
após o bloco de código dentro do for ter sido executado:

    for (let i = 0; i < 10; ){
        console.log(i)
        }   



for executado sem o segundo parâmetro, que é a condição de parada:

    for (let i = 0; ; i++){
        console.log(i)
        }



Outro caso que pode gerar loop infinito 
é o de alterações feitas na variável de controle 
dentro do bloco do for, o que não é uma boa prática:

    for (let i = 0; i < 10; i++){
     i--
        console.log(i)
        }

*/