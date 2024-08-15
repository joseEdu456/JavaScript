var pessoa = {};
var homem;

/*
Criei um objeto pessoa, caso não tivesse declarado as suas propriedade abaixo e pedisse para o terminal
me mostrar a propriedade pessoa.idade ele então retornaria o valor undefined pois ela não existe.
*/

pessoa.nome = 'Pedro';
pessoa.idade = 32;

/*
O valor undefined é retornado quando a propriedade de determinado objeto não existe ou 
uma variavel que não possue um valor atribuido a ela. Porém podemos definir uma propriedade como
undefined durante a atribuição de seu valor, mesmo aquela propriedade já existindo. Como mostra
o exemplo abaixo:
*/
pessoa.descricao = undefined; // Como podemos ver a propriedade descricao existe e ela está sendo declarada como undefined

/*
Agora o null ele é utilizado para indicar quando existe a ausencia de um valor na determinada propriedade
Veja o exemplo abaixo:
*/ 
pessoa.anoNasc = null;  // A propriedade anoNasc existe no objeto pessoa, porém está com a ausencia de um valor, aqui representado pelo null

