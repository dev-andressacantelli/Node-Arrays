/* Criar uma fun��o que recebe como argumento o nome de um aluno,
verifique se o aluno est� presente na lista e retorne a m�dia final que se encontra no mesmo �ndice.
Caso o nome do aluno n�o esteja na lista, retorne uma mensagem indicando que o aluno n�o foi encontrado;

1� Criar array com nome dos Alunos:
             Indice: 0,         1,      2,     3] */ 
const alunos = ['Jo�o', 'Juliana', 'Caio', 'Ana']


//2� Criar array com a m�dia dos alunos:
//              Indice:  0, 1, 2, 3]
const mediaDosAlunos = [10, 7, 9, 6]


//3� Criar um array com os dois arrays anteriores:
//                 Indice:      0,              1]
let listaDeNotasEalunos = [alunos, mediaDosAlunos]


//4� Criar uma fun��o que busca se o par�metro passado est� na condi��o
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEalunos[0] .includes(nomeDoAluno)) {
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEalunos[0][indice] + ', sua m�dia � ' + listaDeNotasEalunos[1][indice]
    } else {
        return "Aluno n�o est� cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Fabio"))
console.log(exibeNomeNota("Jo�o"))


/*Traduzindo o c�digo:

SE (na listaDeNotasEAlunos[0] .existe o (nome do aluno)) {
    crie a variavel "indice" com = o n�mero da posi��o deste nome
    retorne na listaDeNotasEAlunos[0][n� do indice pego com indexof] + ' ,sua m�dia � ' + listaDeNotasEAlunos[1][indice]

A fun��o verifica se no array listaDeNotasEAlunos na posi��o 0, que � o array de alunos, 
existe o nome passado como par�metro, atrav�s do m�todo "includes". 
Caso exista o nome, cria-se a vari�vel "let indice", que pega dentro do array listaDeNotasEAlunos na posi��o 0, 
que � o array de alunos, a posi��o do nome dentro do array, atrav�s do m�todo "indexOf". 
Retorna ent�o o listaDeNotasEAlunos na posi��o 0, que � o array de alunos, com o "indice" (n� da posi��o do nome) 
e junta com a string 'sua m�dia �' que junta com o array de posi��o 1, que � o array de medias, 
na listaDeNotasEAlunos, comparando com o indice.    

Ent�o, a fun��o basicamente pega o nome, verifica se tem na lista, se tem, 
pega a posi��o desse nome da lista e tr�s a m�dia. 

No trecho de c�digo:
return listaDeNotasEalunos[0][indice]
A tradu��o �:
retorne listaDeNotasEalunos[alunos][m�dia]

includes: retorna um true ou false;
indexOf: retorna o n�mero do �ndice dentro do array, ou seja, retorna a posi��o do par�metro dentro do array. */




