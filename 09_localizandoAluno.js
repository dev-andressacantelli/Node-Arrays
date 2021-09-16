/* Criar uma função que recebe como argumento o nome de um aluno,
verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado;

1° Criar array com nome dos Alunos:
             Indice: 0,         1,      2,     3] */ 
const alunos = ['João', 'Juliana', 'Caio', 'Ana']


//2° Criar array com a média dos alunos:
//              Indice:  0, 1, 2, 3]
const mediaDosAlunos = [10, 7, 9, 6]


//3° Criar um array com os dois arrays anteriores:
//                 Indice:      0,              1]
let listaDeNotasEalunos = [alunos, mediaDosAlunos]


//4° Criar uma função que busca se o parâmetro passado está na condição
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEalunos[0] .includes(nomeDoAluno)) {
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEalunos[0][indice] + ', sua média é ' + listaDeNotasEalunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Fabio"))
console.log(exibeNomeNota("João"))


/*Traduzindo o código:

SE (na listaDeNotasEAlunos[0] .existe o (nome do aluno)) {
    crie a variavel "indice" com = o número da posição deste nome
    retorne na listaDeNotasEAlunos[0][n° do indice pego com indexof] + ' ,sua média é ' + listaDeNotasEAlunos[1][indice]

A função verifica se no array listaDeNotasEAlunos na posição 0, que é o array de alunos, 
existe o nome passado como parâmetro, através do método "includes". 
Caso exista o nome, cria-se a variável "let indice", que pega dentro do array listaDeNotasEAlunos na posição 0, 
que é o array de alunos, a posição do nome dentro do array, através do método "indexOf". 
Retorna então o listaDeNotasEAlunos na posição 0, que é o array de alunos, com o "indice" (n° da posição do nome) 
e junta com a string 'sua média é' que junta com o array de posição 1, que é o array de medias, 
na listaDeNotasEAlunos, comparando com o indice.    

Então, a função basicamente pega o nome, verifica se tem na lista, se tem, 
pega a posição desse nome da lista e trás a média. 

No trecho de código:
return listaDeNotasEalunos[0][indice]
A tradução é:
retorne listaDeNotasEalunos[alunos][média]

includes: retorna um true ou false;
indexOf: retorna o número do índice dentro do array, ou seja, retorna a posição do parâmetro dentro do array. */




