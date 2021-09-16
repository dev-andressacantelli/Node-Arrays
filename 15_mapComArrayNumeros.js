/* Um aluno recebeu um ponto extra nas suas notas, 
adicione esse ponto extra para cada nota,
sem adicionar mais um elemento no array */ 


//1� Passo: declarar as notas em um array:
const notas = [10, 9, 8, 7, 6]


/* 2� Passo: Criar uma nova vari�vel que ir� guardar as novas informa��es
ou seja, uma nova vari�vel que ir� guardar um novo array retornado.
nova vari�vel = primeiroArray.map

3� Passo: Criar uma arrowFunction que retorna uma nota + 1 ponto extra;
Por�m, se criar essa function desta maneira "seca", tipo: 

"const notasAtualizadas = notas.map( nota => nota +1 )"

Ir� acrescentar 1 ponto no primeiro elemento, que no caso seria o 10,
ficando ent�o com nota 11. Como a nota 11 n�o existe,
faz-se necess�rio criar uma fun��o mais espec�fica que avalia se o elemento do array
que ir� acrescentar esse ponto extra, tem valor 10, se tiver, ele ignora esse elemento,
e passar� para o pr�ximo elemento dentro do array, no caso o elemento que vale 9.

4� Passo: Utilizando um operador tern�rio, 
cria-se a arrowFunction que compara se a nota � 10, se for verdadeiro retorna o valor da nota:
"nota == 10 ? nota " 
Se for falso, retorna a nota + 1:
": ++nota"
 */
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota )


//5� Passo: Imprime as notas
console.log(`Suas notas eram: ${notas}`)
console.log(`Suas notas atuais s�o ${notasAtualizadas}`)

// forEach() -> N�o retorna nada, ele executa o que est� dentro do bloco da function;
// map() -> Calcula e retorna com uma nova array;



/* Outro exemplo utilizando outras notas no array para verificar o operador tern�rio:
( nota => nota == 10 ? nota : ++nota ) */

const notas2 = [10, 10, 5, 7, 9]

const notasAtualizadas2 = notas2.map( nota => nota == 10 ? nota : ++nota )

console.log(`Suas notas no segundo semestre eram: ${notas2}`)
console.log(`Suas notas atuais do segundo semestre s�o ${notasAtualizadas2}`)