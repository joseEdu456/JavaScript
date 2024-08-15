// Diferentes das outras linguagen o == usado para comparar dois valores para igualdade, mas ele não considera o tipo de dado. Isso significa que ele tenta converter os operandos para o mesmo tipo antes de fazer a comparação. 
console.log(0 == '0')
/*
Quando eu comparo x == y, eu comparo seu tipos e então ele me retorna true ou false,
no exemplo a cima estou comparando um number com uma string, porém quando fazemos esse tipo
de comparação, ele pega a string realiza um metodo toNummber(y) passando seu tipo para number
e ai me retorna true.
*/

/*
Já o === significa comparar estritamente duas var
*/
console.log('jose' === 'joao')
console.log('jose' === 'jose')
console.log(10 === 7)
console.log(7 === 7)

// Praticamente todas as variaveis sao true porém exitem algumas que são false
// as que sao false sao 0, null, undefined, NaN, string vazia'', todos esses são considerados como false

var geraNumero = function(max){
    if(max === undefined || max === null || max === 0 ){
        max = 1
    }
    return Math.floor(Math.random() * max)
}

console.log(geraNumero(8));
console.log(geraNumero());

// Aqui vao alguns operadores que a lingagem te   m
console.log(typeof 10)        // O typeof informa que tipo de variavel que é, neste caso number
console.log(typeof 'José')    // O typeof informa que tipo de variavel que é, neste caso string    
console.log(typeof true)      // O typeof informa que tipo de variavel que é, neste caso boolean  
console.log(typeof undefined) // O typeof informa que tipo de variavel que é, neste caso undefined
console.log(typeof null) // Todas as outras variveis sao do tipo object
console.log(typeof {})   // Todas as outras variveis sao do tipo object

var Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

var clebi = new Pessoa('Cleber', 2000) // O new tambem é um operador
console.log(clebi instanceof Pessoa) // Basicamente o instanceof pergunta se a variavel é uma instancia daquele object, neste caso true
console.log(clebi instanceof Date) // false
console.log("nome" in clebi) // O in verifica se a propriedade faz parte do object, neste caso true
console.log("altura" in clebi) // false
console.log(clebi)
delete clebi.idade; // O delete apaga a propriedade dentro daquele object
console.log(clebi)

var numero = 10
var verificaNumero = function(){(numero > 8) ? console.log("Maior que 8") : console.log("Menor que 8")} // if em forma de ternario representado pelo ?
console.log(verificaNumero())
