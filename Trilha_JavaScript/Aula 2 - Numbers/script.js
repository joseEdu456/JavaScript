var numero = 3;

numero.toExponential(2); // 300
numero.toFixed(2); // 3.00
numero.toString(); // "3"
numero.valueOf(); // 3

Math.sqrt(numero); // Metodo Math.sqrt() faz a raiz quadrada do valor dentro do parenteses
Math.pow(numero, 2); // Metodo Math.pow(x, y) sendo o x o valor base e y o expoente, neste caso, numero = 3 elevado a 2 é igual 6 
Math.sin(1); // Math.sin() usado para saber o seno de determinado numero, neste caso o 1
Math.cos(1); // Math.cos() usado para saber o coseno de determinado numero, neste caso o 1
Math.tan(1); // Math.tan() usado para saber o tangente de determinado numero, neste caso o 1
Math.floor(numero) // Math.floor() vai retornar o valor inteiro do numero

var number = Math.random(); // Estou criando uma variavel que vai gerar um numero aleatorio entre 0 e 1

// caso queira gerar um valor aleatorio em um determinado intervalo deve se denominar um valor min e um max
var min = 5;
var max = 12;
// depois realizar a multiplicação do numero random pelo intervalo desejado e por fim soma-lo com o valor minimo
// da seguinte maneira
var numeroIntervalo = Math.random() * (max - min) + min; // Execução: 0 * (7) + 7 = 7 ou 1 * (7) + 5 = 2

                                                        