/*
Um objeto é uma coleção de valores e chaves de qualquer tipo de dado,
é possivel adicionar ou remover uma propriedade a qualquer momento. 
*/

var comidas = {} // Criação de um objeto vazio 

//--------- DECLARANDO UM OBJETO COM VALORES --------------- 

/*
    Abaixo estou criando um objeto e determinando os valores
    de suas propriedades. No objeto filme, foi criado a propriedades nomeFilme,
    sinopse, valorIngresso e também um objeto assento que dentro possui as
    propriedades cadeira e fileira.
    Veja que diferente da declaração de uma variavel comum que usamos o "=" para atribuir
    um valor, na propriedade usamos o ":" para declarar um valor.
    Para cada final de declaração de propriedade devemos colocar uma virgula e assim em diante, 
    até chegarmos na ultima propriedade a ser declarada onde não é "," ou ";" no final
*/ 
var filme = {
    nomeFilme: 'Homem Aranha',
    sinopse: 'Homem é mortido por uma aranha',
    valorIngresso: null,
    assento: {
        cadeira: 18,
        fileira: 22
    }
};

//------------- MODIFICANDO PROPRIEDADES EXISTENTES -----------------
//--------------- E INSERINDO NOVAS PROPRIEDADES -----------------

/*
Podemos realizar a inserção de uma nova propriedade ou modificar alguma já
existente a qualquer momento. Veja um exemplo abaixo:
*/
filme.nomeFilme = 'Superman';                           // Foi feita a alteração do valor nas propriedades
filme.sinopse = 'Alienigena cai na terra e vira heroi'; // nomeFilme e sinopse.
filme.duracao = "2h 30min"; // Criação de uma nova propiedade duracao.
/* 
É possivel também alterar o valor das propriedades o objeto assento que está dentro do
objeto filme.
*/
filme.assento.cadeira = 2;  // Estou realizando a troca do valor declarado na propriedade cadeira no objeto assento que está dentro de filme
filme.assento.fileira = 11; // Estou realizando a troca do valor declarado na propriedade fileira no objeto assento que está dentro de filme

// ------------- REMOVENDO PROPRIEDADES ----------------

/*
Caso queira apagar uma propriedade dentro de algum objeto
utiliza-se o comando delete e após a propriedade que deseja apagar.
*/
delete filme["valorIngresso"]; //Dessa maneira eu apaguei a propriedade valorIngresso que não estava sendo utilzada
delete filme["assento"]["fileira"]; //Já aqui fiz a deletação da propriedade fileira dentro do objeto assento.

//---------------- TREINOS ----------------------
var desenvolvedor = {
    nome: "Rogério",
    idade: 40,
    nacionalidade: "Brasileiro",
    linguagem: {
        nomeLinguagem: "JavaScript",
        framework: "Angular"
    }
};

desenvolvedor["estCivil"] = "Solteiro";
desenvolvedor["linguagem"]["nomeLinguagem"] = "C#";
desenvolvedor["linguagem"]["framework"] = "ASP.NET";
delete desenvolvedor.nacionalidade;

console.log(desenvolvedor);

comidas = {
    nome: "Chocolate",
    tipo: "Doce",
    calorias: 56,
    sabor: null
};

console.log(comidas);

console.log(filme);