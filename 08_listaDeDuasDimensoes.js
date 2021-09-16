// Criar uma lista com 2 dimen�es de nomes e m�dias de notas;

// Criar array com nome dos Alunos:
//           Indice: 0,         1,      2,     3]
const alunos = ['Jo�o', 'Juliana', 'Caio', 'Ana']


// Criar array com a m�dia dos alunos:
//              Indice:  0, 1, 2, 3]
const mediaDosAlunos = [10, 7, 9, 6]


// Criar um array com os dois arrays anteriores:
//                 Indice:      0,              1]
let listaDeNotasEalunos = [alunos, mediaDosAlunos]



//              [array alunos] [indice 0]                     [array media] [indice 0]
console.log(`${listaDeNotasEalunos[0][0]}, sua m�dia � ${listaDeNotasEalunos [1][0]}`)
//Retorna: Jo�o, sua m�dia � 10


//              [array alunos] [indice 1]                     [array media] [indice 1]
console.log(`${listaDeNotasEalunos[0][1]}, sua m�dia � ${listaDeNotasEalunos [1][1]}`)
// Retorna: Juliana, sua m�dia � 7


//Exemplo de invers�o de sequencia, nota primeiro / nome depois
//              [array media] [indice 0]                     [array alunos] [indice 0]
console.log(`${listaDeNotasEalunos[1][0]}, sua m�dia � ${listaDeNotasEalunos [0][0]}`)
// Retorna: 6, sua m�dia � Ana


//Exemplo de nota errada:
//              [array alunos] [indice 3]                     [array media] [indice 1]
console.log(`${listaDeNotasEalunos[0][3]}, sua m�dia � ${listaDeNotasEalunos [1][2]}`)
// Retorna: Ana, sua m�dia � 9 (por�m a nota de Ana � 6, pois sua nota est� na posi��o 3)







