/* Depois de calcular a m�dia dos alunos,
precisamos mostrar quem est� reprovado entre os alunos:
Ana, Marcos, Maria, Mauro.
7, 4.5, 8, 7.5 */

//1� Passo: Declarar os 2 arrays:
const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

/*2� Passo: declarar a const de reprovados contendo o m�todo filter com arrow function:

- O filter precisa ser chamado pelo array que queremos que retorne, nesse caso, nomes; 
- Para associar o indice de array de nomes com o indice do array de notas;
- O filter � um m�todo boolean, ele verifica sse a nota � true or false quanto � <5;  

                                o _ representa o par�metro aluno                 */
const reprovados = nomes.filter( (_, indice) => notas [indice] < 5 )

console.log(`Reprovados: ${reprovados}`)