// Criar uma lista com 2 dimenões de nomes e médias de notas;

// Criar array com nome dos Alunos:
//           Indice: 0,         1,      2,     3]
const alunos = ['João', 'Juliana', 'Caio', 'Ana']


// Criar array com a média dos alunos:
//              Indice:  0, 1, 2, 3]
const mediaDosAlunos = [10, 7, 9, 6]


// Criar um array com os dois arrays anteriores:
//                 Indice:      0,              1]
let listaDeNotasEalunos = [alunos, mediaDosAlunos]



//              [array alunos] [indice 0]                     [array media] [indice 0]
console.log(`${listaDeNotasEalunos[0][0]}, sua média é ${listaDeNotasEalunos [1][0]}`)
//Retorna: João, sua média é 10


//              [array alunos] [indice 1]                     [array media] [indice 1]
console.log(`${listaDeNotasEalunos[0][1]}, sua média é ${listaDeNotasEalunos [1][1]}`)
// Retorna: Juliana, sua média é 7


//Exemplo de inversão de sequencia, nota primeiro / nome depois
//              [array media] [indice 0]                     [array alunos] [indice 0]
console.log(`${listaDeNotasEalunos[1][0]}, sua média é ${listaDeNotasEalunos [0][0]}`)
// Retorna: 6, sua média é Ana


//Exemplo de nota errada:
//              [array alunos] [indice 3]                     [array media] [indice 1]
console.log(`${listaDeNotasEalunos[0][3]}, sua média é ${listaDeNotasEalunos [1][2]}`)
// Retorna: Ana, sua média é 9 (porém a nota de Ana é 6, pois sua nota está na posição 3)







