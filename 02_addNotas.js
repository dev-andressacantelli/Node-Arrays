//Utilizando um array de 3 posições:
const notas = [10, 6, 8]
console.log(notas)

//Adicionar um elemento (uma nota) ao final do array com a função push:
notas.push(7)
console.log(notas)

//Tirando a média aritmética após a adição da 4° nota:
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)


//Adicionar um elemento no array (uma nota) na primeira posição com a função unshift: 
notas.unshift(5)
console.log(notas)


