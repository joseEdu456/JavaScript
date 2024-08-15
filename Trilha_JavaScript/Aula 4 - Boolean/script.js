var eMentira = false;
var eVerdade = true;
var number = 0;

// Por padrão quase todos os tipos de variaveis possuem o valor true, são poucas excessões que são false

if(eMentira){                   // Aqui no if sua primeira condição é caso o eMentira for true 
    console.log('Verdade');     // irá retornar um no console a mensagem 'Verdade'
}else{                          // porém caso isso for false 
    console.log('Mentira');     // irá retornar a mensagem 'Mentira'
}

//Todos os IFs entendem sua primeira condição como verdadeiro caso não tenha nenhuma condição especifica

eMentira.toString(); //Este metodo é usado para escrever no console qual é o seu valor booleano

if(number){                     // Um dos casos em que a variavel vai ter o valor boolean como false é o 0
    console.log('É verdade');   // veja aqui o 0 por ser falso ele já cai direto no else
}else{                          // e asssim retornando a mensagem relatada no codigo
    console.log('É mentira');   
}

/*
Um ponto importante é que quando uma variavel retorna 
o valor undefined ou null, ela vem como tipo boolean
automaticamente 
*/