/* Se quisermos percorrer matrizes, um �nico for n�o ser� suficiente. 
Mas podemos usar o for v�rias vezes, uma para cada dimens�o da matriz. 
Assim, uma matriz de duas dimens�es usar� dois for, um dentro do outro.

1� Passo: Come�aremos criando mais alguns arrays e uma matriz de 2 dimens�es */

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0


/* 2� Passo: Com a matriz criada. vamos iterar sobre os elementos. 
Mas n�o poderemos usar o mesmo for utilizado da �ltima vez, 
j� que agora notasGerais[i] cont�m um array e n�o mais um valor num�rico. 
Por isso usaremos outro for para acessar esse array. */

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }

//3� Passo: redefinir a vari�vel m�dia com o valor obtido no for/ notasGerais.length
media = media/notasGerais.length

//4� Passo: imprimir media
console.log(media)

/* Traduzindo:

No primeiro for criamos uma let i e vamos executar o bloco de c�digo 
enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), 
o primeiro for ser� executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova vari�vel, a let j, 
j� que n�o podemos usar uma nova let i porque ela j� est� definida, 
e vamos execut�-lo enquanto j for menor que notasGerais[i].length. 
Como cada notasGerais[i] � um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O c�digo dentro do segundo for vai acumular o valor de notasGerais[i][j], 
lembrando que notasGerais[i] � um dos 3 arrays iniciais. 
Assim, o par�metro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], 
retornando um n�mero que podemos usar na nossa conta.

Para conseguir a m�dia entre todos os arrays, temos que somar as m�dias dos arrays de notas, 
8+7+9 edividir pela quantidade de arrays em notasGerais, ap�s o for.

Com isso usamos o for para passar por todos os elementos da matriz, 
e nesse caso, calcular a m�dia dos valores deles.*/