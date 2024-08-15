/*
Diferente do C# ou qualquer outa linguagem orientada a objeto
o javascipt não possui classe, construtures, metodos, etc.
As functions são blocos de código isolados, ou seja, eles não podem ser
acessados externamente. Uma function pode retornar qualquer tipo de valor
seja string, number, boolean, object, ou até mesmo uma outra function.
*/

// -------------- EXPLICANDO FUNCTIONS ---------------
/*
As functions são separadas em dois tipos, sendo eles o function declaration 
e o function expression.
*/
function sub(a,b){ // Function declaration
    return a - b;   
};

var sub = function (a,b){ // Function  expression
    return a - b;
};

var sub = function sub(a,b){ // Named Function expression
    return a - b;
};

/*
A diferença entre esses tres tipos é que declaration é carregada antes da interpretação
do codigo, diferente da expression que é sempre carregada durante a interpretação.
Exemplo: 
*/
console.log(soma(2, 3)); // Durante a execução do codigo o terminal    
function soma(c, d){    // realizou a function mesmo estando antes
    return c + d;      // da criação da function
}

//console.log(mult(3, 3));         Diferente da aqui onde foi declarado uma function
var mult = function mult(a, b){ // expression e o terminal apresentou um erro na execução
    return a * b;               // pois com o codigo dessa maneira ele entende que a function
};                              // ainda não foi criada. Para funcionar devemos colocar o comando
                                // console.log() na ultima linha.

//----------- PASSANDO UMA FUNCTION COMO PARAMETRO -----------

var produto = {nome : "Camiseta", preco: 55}; // Declaração do objeto produto

function formulaImpostoA(preco){ // Criação da função que calcula o imposto de A
    return preco * 0.5;
}

function calculaPreco(produto, formulaImposto) { // Criando a funcao que calcula o preço final com imposto, onde vai receber os parametros de produto e formula do Imposto
    return produto.preco + formulaImposto(produto.preco); // Nesta função irá retornar o valor do preco do produto mais o imposto que o usuario queira calcular,
} // nesta hora ele ira chamar a function digitada pelo usuário

console.log(calculaPreco(produto, formulaImpostoA)); // Neste exemplo o terminal irá mostrar a função calculaPreco, onde seu primeiro parametro sera o 
// objeto produto e o segundo parametro a formula do imposto A.

/*
 Execução do codigo a cima:
    - Primeiro o codigo executa a function calculaPreco
    function calculaPreco(produto, formulaImpostoA){
        return 55 + formulaImpostoA(55);
    }

    - A seguir, ele faz a function formulaImpostoA
    function formulaImpostoA(55){
        return 55 * 0.5
    }

    - Depois ele manda o resultado da formulaImpostoA para o calculaPreco
    function calculaPreco(produto, formulaImpostoA){
        return 55 + 27,5;
    }

    - E por fim ele mostra o preco com o imposto no terminal, que neste caso será 82,5.
*/

// Esse tipo de pratica se chama lambda, muito importante pois com ele podemos reutilizar nosso codigo várias vezes.

/*
    Exemplo disso é caso eu queira calcular o preco final do produto com um outro imposto aplicado sobre.
    Veja abaixo:
*/
var formulaImpostoB = function(preco){
    return preco * 0.2;
}

console.log(calculaPreco(produto, formulaImpostoB));

/*
Dessa maneira só precisei mudar a formula de imposto mas não a function
principal que calcula o preco sobre o imposto
*/

//---------------- RETORNANDO UMA FUNCTION ----------------

// Em javascript podemos também retornar function dentro de outras functions

var frase = function(){ // Aqui estou declarando um function que se chama frase
    return function(){ // que irá retornar uma outra function, que por fim irá
        return 'Eu amo batata frita'; // retornar uma string
    }
}
console.log(frase()()); // Em javascript, colocamos quatro parentese pois devemos entrar dentro da function que desejamos mostrar

/*
- console.log(frase()());

No caso a cima o primeiro abre fecha parenteses estarei pedindo ao
console para mostrar a seguinte mensagem:

return function(){
    return 'Eu amo batata frita'
}

Agora colocando o segundo abre e fecha parenteses o console irá mostrar
a mensagem certa, pois vou entrar dentro da segunda function
*/

//---------- Function como metodo dentro de um Object ------
var funcionario = {
    nome: 'João Victor',                // Podemos criar uma function dentro de um object dessa forma
    idade: 43,                          // ela acaba fazendo o papel de um metodo, no exemplo utilizado, criei uma function
    salario: 1300.5545,                 // getSalario onde irá retornar o salario do funcionario formatado com duas casas decimais após
    getSalario : function(){            // a virgula, a palavra this no codigo é usada pois a function está chamando a propriedade salario
        return this.salario.toFixed(2); // que está dentro do object, se não houvesse o this estaria chamando uma var salario criada no escopo global
    }
}

console.log(funcionario); // Mostrando no terminal o object funcionario
// console.log(funcionario.getSalario); Mostrando a function
console.log(funcionario.getSalario()); // Entrando dentro da function e retornando seu resultado

var getCpf = function(){
    return this.cpf;
}

var getIdade = function(plus) {
    return this.idade + plus;
}

var cliente = {                     // Podemos também criar funcitions fora de objects e pedir
    nomeCliente: 'Pedro Alves',     // para que elas acessam a propriedade dentro de um determinado 
    idade: 17,                      // object por meio da palavra this.
    cpf: "123.456.789-10",
    getCpf : getCpf,
    getIdade :  getIdade
}

console.log(cliente.getCpf()); // Chamei o object cliente e depois o metodo getCpf()

getCpf(); // Chamando a function sem o object, o terminal irá me retornar o valor undefined porque a function retorna o valor a propriedade dentro do object e não uma var global

//--------------- INVOCANDO UMA FUNCTION COM CALL OU APLLY ----------------------

/*
 Vamos utilizar o mesmo exemplo de cliente
*/

console.log(getCpf.call(cliente)); // A propriedade call chama o object cliente como escopo, assim ele utiliza o object cliente dentro da function
console.log(getIdade.call(cliente, 5)) // O call pode utilizar parametros livremente tambem.

console.log(funcionario.getSalario.apply(funcionario)); // Podemos chamar os metodos call e apply dessa forma também 
console.log(funcionario.getSalario.call(funcionario));  // Podemos chamar os metodos call e apply dessa forma também

/*
A sintaxe para utilizar o call é dessa seguinte maneira:
  function.call(escopo, parametro1, parametro2)
*/

console.log(getIdade.apply(cliente, [6, 7, 4])); // A diferença entre o apply e call é que no apply os parametros devem ser declarados
// utilizando arrays, podemos colocar varios parametros mesmo que a function precise de um só, isso tanto no call quanto no apply.

/*
 Podemos acessar os parametros utilizados através da variavel implicita arguments
*/

/*
A sintaxe para utilizar o apply é dessa seguinte maneira:
  function.apply(escopo, [parametro1, parametro2])
*/

//--------------------- FUNCTION CONSTRUTORAS E FABRICAS ------------------

/*
Esses dois tipos de function são utilizadas quando queremos criar novos objetos
sem ficar repetindo toda a estrutura de um object, assim usando uma function
*/
// Criando um object padrão
var pessoa = {
    nome: 'Patrick',
    idade: 21
};
// Criando um novo object utilizando uma function fabrica
var criaPessoa = function(nome, idade) {
    return {
        nome: nome,         // Propriedade nome do object vai receber o nome digitado como parametro
        idade: idade        // Propriedade idade do object vai receber o idade digitado como parametro
    }
};
console.log(criaPessoa('Arthur', 19)); // Dessa forma estou criando objects pessoa diferentes
console.log(criaPessoa('Thiago', 23)); // Dessa forma estou criando objects pessoa diferentes
// As functions fabricas são muito utilizadas por ai, pois ela facilitam muito na criação de novos objects

/*
Agora falando mais sobre as functions construtoras, elas são criadas como a primeira letra maiscula,
exatamente por causa do operador new que utilizamos durante o processo de criação.
*/

//Function Construtura
var Funcionarios = function(nome, salario){
    this.nome = nome;       // Para cada novo funcionario cadastrado terá uma propriedade nome que irá reber o valor colocado no parametro, isso é feito através da palavra this
    this.salario = salario; // Para cada novo funcionario cadastrado terá uma propriedade salario que irá reber o valor colocado no parametro, isso é feito través da palavra this   
} 

var jose = new Funcionarios("José Eduardo", 1200); // Uma das maneiras de criar um novo object utilizando uma function construtura

console.log(new Funcionarios('Mario', 655.42));
console.log(new Funcionarios('Rogério', 5523.55));
console.log(jose);

/*
Basicamente o atributo new está fazendo os seguintes processos:

var mario = {};
Funcionarios.call(mario, 'Mario', 655.42);

Ou seja, o new cria uma propriedade nome e salario para os valores colocados no parametro
*/

//-------------- EXERCICIOS DE TREINOS -----------

//FUNCTIONS COMO PARAMAMETRO
var senha = 'pipipopo';

var tamanhoSenha = function(senha){
    return senha.length;
}

var verificaSenha = function(senha, testeSenha){
    return testeSenha(senha);
}
console.log(verificaSenha(senha, tamanhoSenha));
//-------------------------------------------

//FUNCTIONS RETORNANDO FUNCTIONS
var fraseDoDia = function(){
    return function(){
        return 'Bom dia';
    }
}
console.log(fraseDoDia()());
//------------------------------

//FUNCTION DENTRO DE OBJECTS
var comidas = {
    nome: 'Hamburger', 
    qtdEstoque: 7,
    getEstoque: function(){
        return this.qtdEstoque;
    }
};

var getStatus = function(){
    return this.status;
}

var produtos = {
    nome: 'Cadeira',
    valor: 321,
    status: 'Ativo', 
    getValor: getValor,
    getStatus: getStatus
};

function getValor(){
    return this.valor
};

console.log(comidas.getEstoque());
console.log(produtos.getValor());
//-------------------------------------

//CALL e APPLY
var soma = function(num1, num2){
    return num1 + num2;
}

console.log(soma.call(null, 2, 3)); //Podemos usar tanto o call quanto o aaply sem um contexto(objeto), definindo em seu lugar o null
console.log(soma.apply(null, [3, 3])); //Podemos usar tanto o call quanto o aply sem um contexto(objeto), definindo em seu lugar o null
console.log(getValor.call(produtos));
console.log(getStatus.apply(produtos));
//--------------------------

// Functions construturas e fabricas
produtos = function(nome, valor, status){ //FUNCTION FABRICA
    return{
        nome: nome,
        valor: valor,
        status: status
    }
}

var produto1 = produtos('Mouse', 55, 'Ativo');
console.log(produtos)

console.log(produtos('Mesa', 223, 'Ativo'))
console.log(produtos('Monitor', 1200, 'Inativo'))

var Objeto = function(nome){
    this.nome = nome;
}

console.log(new Objeto('Teclado'));


