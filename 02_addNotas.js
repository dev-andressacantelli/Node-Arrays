//Utilizando um array de 3 posi��es:
const notas = [10, 6, 8]
console.log(notas)

//Adicionar um elemento (uma nota) ao final do array com a fun��o push:
notas.push(7)
console.log(notas)

//Tirando a m�dia aritm�tica ap�s a adi��o da 4� nota:
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)


//Adicionar um elemento no array (uma nota) na primeira posi��o com a fun��o unshift: 
notas.unshift(5)
console.log(notas)


