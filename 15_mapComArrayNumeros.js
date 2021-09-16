/* Um aluno recebeu um ponto extra nas suas notas, 
adicione esse ponto extra para cada nota,
sem adicionar mais um elemento no array */ 


//1° Passo: declarar as notas em um array:
const notas = [10, 9, 8, 7, 6]


/* 2° Passo: Criar uma nova variável que irá guardar as novas informações
ou seja, uma nova variável que irá guardar um novo array retornado.
nova variável = primeiroArray.map

3° Passo: Criar uma arrowFunction que retorna uma nota + 1 ponto extra;
Porém, se criar essa function desta maneira "seca", tipo: 

"const notasAtualizadas = notas.map( nota => nota +1 )"

Irá acrescentar 1 ponto no primeiro elemento, que no caso seria o 10,
ficando então com nota 11. Como a nota 11 não existe,
faz-se necessário criar uma função mais específica que avalia se o elemento do array
que irá acrescentar esse ponto extra, tem valor 10, se tiver, ele ignora esse elemento,
e passará para o próximo elemento dentro do array, no caso o elemento que vale 9.

4° Passo: Utilizando um operador ternário, 
cria-se a arrowFunction que compara se a nota é 10, se for verdadeiro retorna o valor da nota:
"nota == 10 ? nota " 
Se for falso, retorna a nota + 1:
": ++nota"
 */
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota )


//5° Passo: Imprime as notas
console.log(`Suas notas eram: ${notas}`)
console.log(`Suas notas atuais são ${notasAtualizadas}`)

// forEach() -> Não retorna nada, ele executa o que está dentro do bloco da function;
// map() -> Calcula e retorna com uma nova array;



/* Outro exemplo utilizando outras notas no array para verificar o operador ternário:
( nota => nota == 10 ? nota : ++nota ) */

const notas2 = [10, 10, 5, 7, 9]

const notasAtualizadas2 = notas2.map( nota => nota == 10 ? nota : ++nota )

console.log(`Suas notas no segundo semestre eram: ${notas2}`)
console.log(`Suas notas atuais do segundo semestre são ${notasAtualizadas2}`)