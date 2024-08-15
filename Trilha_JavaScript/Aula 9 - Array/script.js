/*
Exitem vários tipos de declaração de array, podemos declarar ela vazia
e depois ir adicionando seus valores, como foi feito abaixo:
*/
var jogos = [];

jogos[0] = 'Final Fantasy'
jogos[1] = 'Spider-man'
jogos[2] = 'The last of us'

console.log(jogos)

/*
Também podemos declarar já com os valores pré-definidos
*/
var filmes = ['Sonic', 'Bad boys', 'MIB', 'Vingadores']
console.log(filmes);

/*
Podemos fazer essas duas maneiras porém utilizando
o operador new. Veja só: 
*/
var series = new Array(); // Criamos uma new array vazio e depois colocando seus valores

series[0] = 'Breaking Bad';
series[1] = 'Suits';
series[2] = 'La casa de papel';
series[3] = 'Loki';
series[4] = 'Mandalorian';

console.log(series);

var artistas = new Array('Taylor Swift', 'Kendrick Lamar', 'Drake'); // Criamos uma new Array com os valores já definidos

console.log(artistas)

/*
Em javascript diferente das outras linguagens a array não tem um valor finito, porém 
podemos definir um tamanho inicial para uma array e depois ir aumentando. Exemplo: 
*/
var atores = new Array(6); // Declarando que o array vai ter um tamanho inicial de 6, lembrando que os indexs começam em 0

console.log(atores) // Saida:  [, , , , , , ,]

// Só que isso não me impede de colocar um valor em uma posição que seja maior do que o tamanho inicial
atores[10] = 'Murilo Benicio';

console.log(atores); //Saida:  [, , , , , , , , , , 'Murilo Benicio']


//------------------ METODOS DE UMA ARRAY ----------------------
/*
Um array possui tambem dentro de si uma API, com elas possuimos vários metodos
*/
console.log(jogos.valueOf()); // Basicamente retorna o que tem dentro do array
console.log(series.toString()); // Transforma o array em forma de string, caso eu queira mostrar na tela de uma forma mais clara
console.log(filmes.length); // Diferente dos outros o length não é uma function, serve para me retornar o tamanho do array (quantos elementos tem)

//------------------ PUSH()------------------
//Agora um dos matodos mais utilizados com array é o push(), que é util para adicionar um elemento no FINAL do array
artistas.push('Lana Del Rey');

console.log(artistas);

//------------------ POP()------------------
// Metodo pop(), utilizado para retirar um elemento do FINAL da array
series.pop();

console.log(series)

//---------------------UNSHIFT() E SHIFT() ---------------------
// Metodo unshift(), usado para adicionar elemento no INICIO do array
// Metodo shift(), usado para remover elemento no INICIO do array
filmes.unshift('Interestelar') // Adicionei um filme no inicio
filmes.unshift('Ilha do Medo'); // Adicionei um filme no inicio
console.log(filmes);
filmes.shift(); // Removi um filme no inicio
console.log(filmes);

//------------------- SPLICE() ---------------------
// No array, existe o metodo splice() que com ele podemos alterar um elemento em determinada posição
console.log(series)

series.splice(1, 1); // Declarei que quero remover o elemento no index 1 e só um elemento que vai ser removido
console.log(series);

// Podemos usar o splice() para adicionar um elemento em determinada posição através dos seus parametros
console.log(artistas)

artistas.splice(1, 1, 'Madonna'); // Veja que eu estou dizendo que eu quero na posição 1 remover um elemento e adicionar 'Madonna' naquele mesmo lugar
console.log(artistas)

filmes.splice(3, 2, 'Star Wars', 'Harry Potter');
console.log(filmes);

series.splice(1, 0, 'Stranger Things'); // Também podemos adicionar um elemento sem necessáriamente remover o que já está na posição
console.log(series);

/*
O metodo splice() só funciona com numeros/posições, não adianta colocar o nome
ou elemento que você quer achar que não vai funcionar
*/

//--------------- FOREACH() --------------

//O metodo foreach() funciona igual um for porém é escrito de uma forma mais simplificada
series.forEach(function(elemento){
    console.log(elemento);
}); 

//---- EXERCICIO PRATICA DE FOREACH()
var nomes = (function(){
    var _nomes = []
    var _add = function(nomePessoa){
        _nomes.unshift(nomePessoa);
    }
    var _mostrar = function(){
        _nomes.forEach(function(elemento){
            console.log(elemento);
        })
    }
    return{
        adicionarNome: _add,
        mostrarNomes: _mostrar
    }
})()

nomes.adicionarNome('Mário');
nomes.adicionarNome('Leonardo');
nomes.adicionarNome('Marcos');
nomes.mostrarNomes();


/* 
Em todos os metodos possuimos o elemento, indice, e array:
    - elemento: elemento atual
    - indice: indice atual
    - array: array que está sendo usado
*/

// O foraech() é muito util, porém não possuimos total acesso ao indice diferentemente do for, onde podemos
// temos total controle do indice

//------------ FILTER() --------------
// O metodo filter não muito utilizado pelos desenvolvedores porém ele é util para caso
// você queira realizar um filtro na sua array. Veja o exemplo abaixo:

var carros = [];                                    // Criando um array carros que vai receber um object com marca e modelo
carros[0] = {Marca: 'Chevrolet', Modelo: 'Onix'}
carros[1] = {Marca: 'Fiat', Modelo: 'Mobi'}
carros[2] = {Marca: 'Fiat', Modelo: 'Uno'}
carros[3] = {Marca: 'Porsche', Modelo: '911'}
console.log(carros)

var carrosFiat = carros.filter(function(elemento){  // Aqui em criei uma variavel que vai receber o filter de carros
    return elemento.Marca === 'Fiat';               // onde a marca do elemento deve ser igual a fiat
})
// Dessa maneira agora a varivel carrosFiat var receber todos os carros que possuem a marca fiat

console.log(carrosFiat);

//-------- SOME() e EVERY() --------------

// Esses metodos são utilizados se quisermos testar os elemento na array
// São metodos que retornam valores true e false

var testemarca = carros.every(function(elemento){   //Para ficar mais fácil a compreensão lê se 
    return elemento.Marca === 'Porsche';            // todo elemento de carros possui a marca porsche, e neste caso irá retornar um valor false
});

console.log(testemarca);

var testeModelo = carros.some(function(elemento){   // Agora o metodo some() está pergundo
    return elemento.Modelo === 'Mobi';              // dentro de carros tem algum elemento com o modelo mobi, neste caso irá retornar true
})

console.log(testeModelo)

//------------ MAP() ------------

//Com o metodo map() é possivel criar uma nova array 

var marcas = carros.map(function(elemento){ // Veja que aqui eu criei uma var marcas que vai receber um map()
    return elemento.Marca;                  // onde vai ter todos as marcas de elemento
}).filter(function(elemento, indice, array){ // agora estou fazendo um filter onde irá
    return array.indexOf(elemento) === indice // filtrar os elementos que terão marcas iguais
    // o metodo indexOf() é utilizado em arrays para achar a primeira ocorrencia de determinado elemento, exemplo,
    // se tiver a marca fiat aparecer duas vezes ele irá pegar o indice do primeiro fiat e ignorar o outro
})

var modelos = carros.map(function(elemento){
    return elemento.Modelo;
})

console.log(marcas)
console.log(modelos)

//------------------ REDUCE() -----------

// Com o metodo reduce é possivel realizar um processamento e uma acumulação
var itens = []
itens[0] = {Nome: 'Monitor', preco: 33}
itens[1] = {Nome: 'Teclado', preco: 20}
itens[2] = {Nome: 'Mouse', preco: 45}

var resultadoItens= itens.reduce(function(prev, cur){ //O prev significa o elemento anterior e o cur é o elemento atual
    return prev + cur.preco; // para cada iteração ele vai pegar o elemento anterior e somar com o elemento atual, neste o preco do elemento
}, 0) // denominando que o loop ira comecar a partir do zero

console.log(resultadoItens)
/*
Execução:
[0] -> null + 33 
[1] -> 33 + 20
[2] -> 53 + 45

*/

//-------------- CONCAT() ----------------

//Assim como em uma string o metodo concat() é utilizado aqui para juntar duas arrays
var motos = ['Yamaha', 'BMW', 'Honda'];
var bicicletas = ['Caloi', 'Aggi'];
var veiculos = motos.concat(bicicletas);

console.log(veiculos.toString());

//----------- SLICE() --------------

// O metodo slice é usado para fatiar uma string. Veja só:
console.log(motos.slice(0,2)); // Seus parametros são o endereço inicial e o endereço final
// Aqui ele vai pegar do array motos os elementos do indice 0 até 2, porém o 2 ele não lê, assim parando
// Então aparecer na saida: 'Yamaha' -> Posiçao 0  e 'BMW' -> Posiçao 1

console.log(motos.slice(1)) // Se possuir apenas um parametro ele vai mostrar a array daquela posição em diante
// Então aparecer na saida: 'BMW' -> Posiçao 1  e 'Honda' -> Posiçao 2

//---------- REVERSE() -------

// Como o nome já diz esse metodo inverte a ordem da array
// só que ela altera a array original
console.log(motos.reverse());
console.log(motos.toString())

//---------- SORT() -------

// O metodo sort é usado para ordenar a array por uma condição especifica
// caso eu use o sort sem nem um parametro, ele ira organizar a array em ordem alfabetica
console.log(motos.sort());

// Porém eu tambem uma condicao de como ele vai organizar a array
var ordemItens = itens.sort(function(a, b){
    return a.preco - b.preco;
})
console.log(ordemItens);

/*
Execução:
33 - 20 = b     20
20 - 45 = a     33
33 - 45 = a     45

*/

/*
Existe uma regra, caso a subtração de um numero negativo: a deve vir em primeiro, se for 0: a e b ficam em suas respectivas posiçoes
e se for podsitivo: b deve ficar em primeiro 
*/

//-------------- JOIN() -----------------
var palavras = [];      // O Join permite que você junte elementos de um array com um separador especifico
palavras[0] = 'Eu'
palavras[1] = 'Amo'
palavras[2] = 'Gelo'

console.log(palavras.join(';'))


//------ TESTE -----
/*
var calculaIdade = (function(){
    var _idade;
    return {
        getIdade: function(anoNasc, anoAtual){
            _idade = anoAtual - anoNasc
        },
        mostraIdade: function(){
            return `Essa é sua idade: ${_idade}`
        }
    }
})()

var listaCliente = (function(){
    var _cliente = [];
    var _add = function(nomeCliente){
        _cliente.push(nomeCliente);
        return _cliente;
    }
    var _remove = function(nomeCliente){
        var pos = _cliente.indexOf(nomeCliente);
        _cliente.splice(pos, 1);
        return _cliente;
    }
    var _trocarNome = function(clienteAtual, clienteNovo){
        var pos = _cliente.indexOf(clienteAtual);
        _cliente.splice(pos, 1, clienteNovo);
        return _cliente;
    }
    return{
        adiconar: _add,
        remover: _remove,
        trocarCliente: _trocarNome
    }
})()

console.log(listaCliente.adiconar('Carlos'));
console.log(listaCliente.adiconar('Joao'));
console.log(listaCliente.adiconar('Patrick'));
console.log(listaCliente.remover('Joao'));
console.log(listaCliente.trocarCliente('Carlos', 'Fumagalli'));
*/
