// Exitem 4 jeitos diferentes construir datas

//O primeiro jeito é utilizando a constructor function Date, isso sem nenhum parametro
var data = new Date();
console.log(data)

// O calculo de data é feito a partir do UTC
// Tambem podemos criar datas usando os milisegundos
var natal2014 = new Date(1419465600000); // Veja que aqui eu coloquei os milisegundos como parametro no function Date
console.log(natal2014)

//É possivel também usar como parametros as proprias datas/strings
var meuAniversario = new Date('06/29/2004'); // O Date entende o padrao americano de datas
console.log(meuAniversario)
console.log(Date.parse('06/29/2004'));

// Porém podemos usar o padrao de string ISO 8601
var anoNovo = new Date("2024-01-01T00:00:00") // Aqui estamos escrevendo o ano-mes-dia, depois usando o T como divisor entre a data e hora, e por fim dizemos a hora
console.log(anoNovo)

// Tambem podemos colocar mais parametros em nossa function date
// sendo seus parametros colocados da seguinte forma: ano, mes, dia, hora, minuto, segundo
var starwarsDay = new Date(2024, 4, 4, 11, 35, 47) // Detalhe muito importante os meses são contados a partir do 0, ou seja: janeiro = 0; fevereiro = 1; ...
console.log(starwarsDay.getDate()); //getDate() mostra o dia numerico
console.log(starwarsDay.getFullYear()); //getFullYear() mostra o ano
console.log(starwarsDay.getDay()); //getDay() mostra o dia da semana, sendo que os dias começam no 0, ou seja: 0 - Domingo; 1 - Segunda; ...
console.log(starwarsDay.toString()) // passa data para forma to string
console.log(starwarsDay.getMonth()) //getMouth() mostra o mes
starwarsDay.setDate('5')  // Os metodos SETs são utilizados para mudar a data original, neste caso estou alterando o dia
starwarsDay.setMonth('5') // Os metodos SETs são utilizados para mudar a data original, neste caso estou alterando o mes
console.log(starwarsDay)

var data = function(dia, mes, ano){
    var data = new Date(ano, mes, dia);
    return data;
}

console.log(data(29, 5, 2004))