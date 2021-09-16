/* Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, 
e cada elemento se localiza numa posição na lista chamada de índice. 

Uma lista ordenada de valores enumerados:
Quando falamos de valores, estamos nos referindo a dados de algum tipo: s
tring (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript. */

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];



// Lógica de um array p/ média aritmética:

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

//Posições no array: 
//             0    1   2    3             
const notas = [10, 6.5, 8, 7.5]

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media)


// Utilizando .length (tamanho do array)
//            variável[posiçãoNoArray]                     variável.length
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media2)


