//Utilizando um array de 4 posi��es:
const notas = [10, 7, 8, 5, 6]
console.log(notas)


//Deletar o �ltimo elemento do array (�ltima nota:6) com a fun��o pop, n�o se insere par�metro:
notas.pop()
console.log(notas)
//console mais descritivo: console.log(`As notas no array s�o: ${notas}`)

//Tirando a m�dia aritm�tica ap�s a subtra��o da 5� nota:
let media = (notas[0] + notas[1] + notas[2] + notas [3]) / notas.length
console.log(`A m�dia de notas � ${media}`)


//Deletar o primeiro elemento do array (primeira nota:10) com a fun��o shift,n�o se insere par�metros:
notas.shift()
console.log(notas)

