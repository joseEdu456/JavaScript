/*
Declarar variaveis através do escopo global não é uma boa prática a ser utilizada
no javascript.
Veja o exemplo abaixo:
*/

var contador = 0;
var add = function(){
    return ++contador;
}                               // É sobre isso que estamos falando, declarando as variaveis no escopo
console.log(add());             // global acabamos gerando vários problemas, no exemplo, estou criando uma function
console.log(add());             // add para o contador, porém criando uma add também para adicionar um item.
console.log(add());             //  Com isso essas duas funções acabam entrando em convergencia.

var itens = [];
var add = function(item){
    itens.push(item);
    return itens;               // Dessa maneira ele entende a partir de agora que a function add
}                               // refere-se a adicionar itens e não mais ao contador, ou seja, caso
console.log(add('A'));          // eu queira agora adicionar um numero ao contador eu não vou conseguir.
console.log(add('B'));          // Declarar dessa maneira geramos um escopo global muito poluido
console.log(add('C'));
console.log(add());

/*
Por conta disso, utilizamos muito o usado de encapsulamento para 
que os codigos funcionem melhor e sem tantos bugs. Podemos realizar o 
encapsulamento através de várias maneiras sendo por meio de objects, factory functions,
constructor functions, etc.
Vamos ver agora como realizar um encapsulamento por meio de objects:
*/

var contador = {
    value: 0,
    add : function(){
    return ++this.value;                // Veja que utilizando um object eu consigo criar
    }                                   // dois metodos add() para diferentes situações 
}                                       // sendo um para o contador e outro adiconar um item.
console.log(contador.add());            
                                        
var produtos = {
    produtos: [],
    add : function(nome){
       this.produtos.push(nome); // Metodo push() utilizado para inserção de itens dentro de um array
       return this.produtos
    }                                               
}
console.log(produtos.add('Mouse'));

/* 
Porém usando objects, é possivel alterar o valor de suas propriedades a qualquer momento
por conta disso é muito mais seguro utilizarmos functions para declarar váriaveis pois dessa
forma é dificil fazer a alteração de seus valores.
*/

var contador = function(){
    var value = 0;              //Com uma função simples todos as variveis ficam privadas a function
    var add = function(){       // sem alterar algo.
        return ++value;
    };
};
console.log(contador()); // Irá retornar undefined por conta que a function contador não retorna nada, o que tem algum tipo de retorno é a function add


/*
Só que utilizando uma factory function conseguimos dizer 
o que queremos que seja publico ou não. Veja:
*/

var criaContador = function(){
    var value = 0;
    return {                // Por causa das closures não utilizamos o this porque a propriedade function add consegue receber o valor da function externa
        add: function(){
            return ++value;
        }
    };
};

var criaProdutos = function(){
    var produtos = [];
    return{                         // Utilizando então uma factory function, consegui criar uma propriedade add
        add: function(nomeProd){        // que é uma function que tem um nome do produto como parametro, onde vai adiconar
            produtos.push(nomeProd);    // o nome do produto ao array produtos.
            return produtos
        }
    };
};

var counter = criaContador(); // Atribuimos a function criaContador() a uma varivel pois se não seria apenas uma function e não um contador
console.log(counter.add()); // Veja que criando uma  factory function conseguimos deixar o add public, assim o usuario pode acionar o que ele quer
console.log(counter.value); // E o value deixamos privado sem o usuario conseguir alterar


var produtos = criaProdutos();
console.log(produtos.add('Geladeira'));

/* 
Podemos utilizar também o uso de constructor functions para realizar encapsulamentos,
porém ela muito igual a factory function o que muda é a sua sintaxe
*/
var CriaCliente = function(){
    var clientes = [];
    this.add = function(nomeCliente){ // Tudo que eu quero que seja publico para o usuario irei utilizar a palavra this
        clientes.push(nomeCliente);
        return clientes;
    };
}

var cliente = new CriaCliente();  // *LEMBRETE*: Toda constructor function deve ter o operador new em sua declaração
console.log(cliente.add('Pablo'));

var cliente1 = new CriaCliente().add;
console.log(cliente1('Marcio'));

// Uma maneira muito utilizada é a Module Patterm que é um tipo de function,
// o IIFE(Immediately-Invoked Function Expression), basicamente é uma evolução
// da factory function

var funcionario = (function(){ // Esse tipo de sintaxe é usada para que não seja necessario atribuir a function em uma determinada variavel
    var nomes = [];            // ou seja, invés de escrever assim: var funcionario = funcionario(); eu já estou dizendo que a var funcionario
    return{                    // recebe a determinada function. Tirando isso, o resto é igual uma factory function
        add: function(nomeFunc){
            nomes.push(nomeFunc);
            return nomes;
        }
    }
})()

console.log(funcionario.add('Fumagalli'));
console.log(funcionario.add('Antonio'));
console.log(funcionario.add('Otávio'));

// Agora uma variação do module patterm é definir as funções como
// privadas e retornalas como uma propriedade. Veja mais:

var soma = (function(){
    var _add = function(valor1, valor2){ // Dessa maneira estou declarando que a function é privada, utilizando o underline
        return valor1 + valor2;
    }
    return{
        add: _add  // Aqui estou dizendo que o a soma irá retornar uma function add que recebe _add
        // Sempre que for puxar uma function privada de dentro, deve se usar o underline 
    }
})()

/*
Utilizando essa variação fica bem mais compreensivel o codigo e o que ele está executando 
*/
console.log(soma.add(7,7));

var contador = (function(){
    var _value = 0;
    var _add = function(){
        return ++_value; // Aqui ele irá retornar o value privado + 1, não iria funcionar se não tivesse especificado que é a var privada que será usada
    }
    var _remove = function(){
        return --_value;
    }
    return{
        add: _add,
        remove: _remove
    }
})()

console.log(contador.add());
console.log(contador.add());
console.log(contador.add());
console.log(contador.remove());
console.log(contador._value) // Veja que por causa do value estar privada eu não vou conseguir enxerga-lo

var pessoas = (function(){
    var _nome = null;
    var _add = function(nome, idade){
        _nome = nome;
        return _nome 
    }
    return{
        add: _add
    }
})()

console.log(pessoas.add('Cleber'));