/* Imprima o �ndice e a lista com os n�meros: 100,200,300,400,500,600 */

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


/* Como funciona os par�emtros de um for:

    let i = 0 -> valor que o index passar� para a verifica��o;
    i <= 10; -> condi��o de parada;
    i++      -> incremento, ou, vari�vel de controle;
    

Exemplos de for errado, la�o infinito:
 

Faltando o terceiro par�metro, 
respons�vel por alterar a vari�vel de controle 
ap�s o bloco de c�digo dentro do for ter sido executado:

    for (let i = 0; i < 10; ){
        console.log(i)
        }   



for executado sem o segundo par�metro, que � a condi��o de parada:

    for (let i = 0; ; i++){
        console.log(i)
        }



Outro caso que pode gerar loop infinito 
� o de altera��es feitas na vari�vel de controle 
dentro do bloco do for, o que n�o � uma boa pr�tica:

    for (let i = 0; i < 10; i++){
     i--
        console.log(i)
        }

*/