//Utilizando um array de 4 posições:
const notas = [10, 7, 8, 5, 6]
console.log(notas)


//Deletar o último elemento do array (última nota:6) com a função pop, não se insere parâmetro:
notas.pop()
console.log(notas)
//console mais descritivo: console.log(`As notas no array são: ${notas}`)

//Tirando a média aritmética após a subtração da 5° nota:
let media = (notas[0] + notas[1] + notas[2] + notas [3]) / notas.length
console.log(`A média de notas é ${media}`)


//Deletar o primeiro elemento do array (primeira nota:10) com a função shift,não se insere parâmetros:
notas.shift()
console.log(notas)

