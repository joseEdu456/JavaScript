var palavra = 'Batata frita'; // Em javascript podemos utilizar tanto '' quanto "" para 
var comida = "Hamburger"; // declaração de strings, como mostrados nos exemplos.
var objeto = ' Mesa ';

/*
Assim como variaveis do tipo number as strings também possuem
metodos padrões dentro delas. Aqui vão algus exemplos
*/

palavra.charAt(7); // Metodo charAt() utilizado para retornar o caracter possicionado no determinado index, neste caso o 7
palavra.indexOf('t'); // Metodo indexOf() é o contrario do charAt(), aqui ele indica qual é o index de determinada letra
palavra.concat('?'); // Como o nome já diz o metodo é utilizado para realizar a concatenção, neste caso estou concatenando o ? para a palavra

/* 
Lembrando que o concat não altera o valor da string original,
caso queira fazer a alteração da string original, deve se atribuir os metodo a string
Exemplo abaixo:
    var palavra = palavra.concat('?'); // dessa maneira a string passa a ser 'Batata Frita?' agora
*/

palavra.replace('frita', 'Doce'); // Este metodo é usado para fazer a troca de uma string/caracter por outro, nesta linha estou trocando a palavra 'frita' por 'Doce'
palavra.split(''); // O metodo split separa a string em pedaços definindo através do parenteses.
palavra.split('t'); // O metodo split separa a string em pedaços definindo através do parenteses, aqui estou separando a string original pela letra 't'
palavra.match('frita'); // Gera um aray resultante da busca 
palavra.substring(0, 6); // Retorna a parte da string desejada, aqui por exemplo, o console vai me retornar a string da posição 0 a 6
objeto.trim(); // Metodo trim utilizado para excluir espaços vazios do inicio e do fim da string
comida.length() // Usado para retornar o tamanho da string 


