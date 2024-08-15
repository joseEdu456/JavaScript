/*
Expressoes regulares sao estruturas formadas por
uma sequencia de caracteres que sepecificam um padrao formal
As expressoes são muito importante para validações de dados ou fazer extração de dados,
e realizar substituição de caracteres
*/
var regExp = /Starfield é chato/;
var palavra = new RegExp("compacto")

console.log(regExp)
console.log(palavra)

// Para realizar validções de campos utilizamos sua API com os seguintes metodos
//exec - Executa a RegExp, retornando os detalhes
//test - test a RegExp, retornando true ou false

// ----- TELEFONE PASSO 1 ----------

// Devos realizar a validação do seguinte numero de telefone

var regExp = new RegExp("9999-9999") // A expressao deve ser a mesma do telefone
var telefone = '9999-9999' // Estou dizendo que nosso telefone sera 9999-9999
console.log(regExp.exec(telefone)); // Pedindo para a exp executar o telefone, assim me retornando os detalhes sobre
console.log(regExp.test(telefone)); // Pedindo para que a exp teste o telefone, para ver se o telefone é igual a regExp, assim me retornando true

// ----- TELEFONE PASSO 2 ----------

// Agora nosso telefone possui um DDD
// Em javascript, os caracteres especiais possue regras para serem colocados, quando tivermos um caracter especial devemos inserir uma barra antes do simbolo
var regExp = new RegExp("\\(48\\) 9999-9999"); // Porém quando criamos um regExp com new devemos usar duas barras invertidas para caracteres especiais
var telefone = '(48) 9999-9999'
console.log(regExp.exec(telefone))
console.log(regExp.test(telefone))

// ----- TELEFONE PASSO 3 ----------

//Nas expressoes podemos fazer testes para saber se a determinada variavel começa ou termina com a expressão
// utilizamos os simbolos ^ e $, sendo ^ para dizer "inicio com" e $ para "finalizo com"

telefone = "O telefone (48) 9999-9999 é do gustavo" 
console.log(regExp.exec(telefone)); // Neste exemplo a regExp está dentro da string telefone,  então ele ira retornar em qual posicao ele achou a regExp dentro da string
console.log(regExp.test(telefone));

/*
Porém se eu quiser especificar que a string testada deve começar começar com a regExp
*/

regExp = new RegExp("^\\(48\\) 9999-9999")
console.log(regExp.test(telefone)); // Aqui ira retornar false pois o telefone não começa com a regExp
telefone = "(48) 9999-9999 é o telefone de gustavo"
console.log(regExp.test(telefone)); // Porém depois que eu alterei o telefone colocando a regExp no inicio, o terminal me retorna true

//Tambem podemos definir que a regExp deve finalizar a string

regExp = new RegExp("\\(48\\) 9999-9999$")
console.log(regExp.test(telefone)); // Aqui ira retornar false pois o telefone não finaliza com a regExp
telefone = "O telefone de gustavo é o (48) 9999-9999"
console.log(regExp.test(telefone)); // Porém depois que eu alterei o telefone colocando a regExp no final, o terminal me retorna true

//E por fim podemos declarar que a regExp deve aparecer no inicio e final da string

regExp = new RegExp("^\\(48\\) 9999-9999$")
console.log(regExp.test(telefone)); // Aqui ira retornar false pois o telefone não finaliza e nem inicia com a regExp
telefone = "(48) 9999-9999"
console.log(regExp.test(telefone)); // Porém depois que eu alterei o telefone definindo que a regExp inicia e finaliza a string, o terminal me retorna true

// ----- TELEFONE PASSO 4 ----------

// Para facilitar com que o usuario possa digitar qualque caracter, sem ser exatamente/igual o que está na regExp
// usamosos grupos de caracteres 

/*
[abc] - Aceita qualquer caracter de dentro do grupo, ou seja: a, b, c
[^abc] - Não aceita os caracteres que estao dentro do grupo
[0-9] - Aceita qualquer caracter entre 0 e 9
[^0-9] - Não aceita qualquer caracter entre 0 e 9
*/

regExp = new RegExp("\\([0-9][0-9]\\) [0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]") // Dessa maneira nossa regExp vai ser aceitar qualquer numero de 0 a 9
telefone = "(17) 99215-9097"
console.log(regExp.exec(telefone))
console.log(regExp.test(telefone))

// ----- TELEFONE PASSO 5 ----------

// Porém veja que no passo 4 a expressao ficou muito grande, muito verbosa por isso em expressoes usamos os quantificadores
// são formas de não precisa ficar escrevendo várias vezes o mesmo conjunto

/*
{n} - Quantifica numero especifico
{n,} - Quantifica  um numero minimo
{n,m} - Quantifica um numero minimo e um numero máximo
*/

regExp = new RegExp("\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}") // Agora a regExp está do passo 4 está mais simplicada
telefone = "(17) 99215-9097"
var telefone1 = "(17) 9934-8118"
console.log(regExp.exec(telefone))
console.log(regExp.test(telefone))
console.log(regExp.test(telefone1))

regExp = new RegExp("[0-9]{9}-[0-9]{2}") // Agora a regExp está mais simplicada
var cpf = "429051778-10"
console.log(regExp.exec(cpf))
console.log(regExp.test(cpf))

// ------------ TELEFONE PASSO 6 -------------------

/*
Quantificadores tambem podem ser aplicados em caracteres, conjuntos, grupos, ou metacarecteres

? - zero ou um
* - zero ou mais
+ - um ou mais
*/

//Caso queira criar conjuntos com outro conjunto dentro, usa-se o parentes e dentro os conjuntos:  ([conjunto1][conjunto2])

regExp = new RegExp("^([0-9]{3}\\.?){3}-[0-9]{2}$") // Neste caso a exp deve ter um numero de 0 a 9 com 0 ou 1 ponto entre 
cpf = "123.456.789-10"
console.log(regExp.exec(cpf))
console.log(regExp.test(cpf))

// ------------ TELEFONE PASSO 7 -------------------

//Agora vamos ver como utilizar um expReg para verificar em uma table

regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}<\/td>)+<\/tr><\/table>/
/*
Na exp acima ele vai procurar na table se tem zero ou mais do conjunto escrito
*/

// Veja a tabela abaixo, eu quero verificar a exp dentro da tabela
telefone = "<table><tr><td>(18) 1234-5678</td><td>(44) 67573-6755</td><td>(17) 99673-1289</td></tr></table>"
console.log(regExp.test(telefone))
console.log(regExp.exec(telefone))

//------------- PASSO 8---------------------------

/*
Possuimos tambem os metacaracteres são meios de simplificar 
nossos conjuntos:
.-> Representa qualquer caracter
\w -> Representa o conjunto [a-zA-Z0-9]
\W -> Representa o conjunto [^a-zA-Z0-9]
\d -> Representa o conjunto [0-9]
\d -> Representa o conjunto [^0-9]
\s -> Representa um espaço em branco
\s -> Representa um nao espaço em branco
\n -> Representa quebra de linha
\t -> representa um tab
*/

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/
var telefone = 'Meu telefone é (17) 992159097'
var telefone1 = 'Meu telefone é (17) 99215-9097'
console.log(regExp.test(telefone))
console.log(regExp.exec(telefone))
console.log(regExp.test(telefone1))
console.log(regExp.exec(telefone1))

//--------- PASSO 9 ----------

// String API
/*
match - Faz uma busca dentro da string e retorna uma array com dados encontrados ou null
split - Divide uma string com base em outra string ou expressao regular
replace - Substitui partes de uma string com base em outra expressao regular ou string fixa
*/

regExp = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/
telefone = "<table><tr><td>(18) 1234-5678</td><td>(44) 67573-6755</td><td>(17) 99673-1289</td></tr></table>"

console.log(telefone.match(regExp));

//--------- PASSO 10 ----------

//Modificadores

/*
i - Flexibilizar se a string pode ser letra maiscula ou minuscula
g - Percorre toda a string
m - Usado para definir quebra de linha
*/

regExp = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/g
telefone = "<table><tr><td>(18) 1234-5678</td><td>(44) 67573-6755</td><td>(17) 99673-1289</td></tr></table>"

console.log(telefone.match(regExp));

//--------- PASSO 11 ----------

//Substituindo a string com replace

regExp = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/g
telefone = "<table><tr><td>(18) 1234-5678</td><td>(44) 67573-6755</td><td>(17) 99673-1289</td></tr></table>"

console.log(telefone.replace(regExp, 'telefone'));