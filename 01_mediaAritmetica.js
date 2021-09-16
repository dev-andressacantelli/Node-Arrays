/* Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor � chamado de elemento, 
e cada elemento se localiza numa posi��o na lista chamada de �ndice. 

Uma lista ordenada de valores enumerados:
Quando falamos de valores, estamos nos referindo a dados de algum tipo: s
tring (texto), number (n�mero), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript. */

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];



// L�gica de um array p/ m�dia aritm�tica:

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

//Posi��es no array: 
//             0    1   2    3             
const notas = [10, 6.5, 8, 7.5]

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media)


// Utilizando .length (tamanho do array)
//            vari�vel[posi��oNoArray]                     vari�vel.length
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media2)


