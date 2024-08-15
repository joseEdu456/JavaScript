var texto = 'khsjhkajshdauhdakjiukajsbekasugdkauhwkrbkabcvkgasdvf'

var toHackerCase = function(text){
    if (!text) throw "Texto Invalido"
    var hackerTextArray = []
    var i = 0;
    while(i < texto.length){
        switch(texto.charAt(i)){
            case 's': hackerTextArray.push(0);
            break;
            case 'j': hackerTextArray.push(7);
            break;
            case 'k': hackerTextArray.push(8);
            break;
            case 'l': hackerTextArray.push(4);
            break;
            default: hackerTextArray.push(texto.charAt(i))
        }
        i++;
    }
    return hackerTextArray.join(",")
};

try{
    console.log(toHackerCase());
}catch(e){
    console.log("Error: " + e)
}

//console.log(toHackerCase());
console.log(toHackerCase(texto));

var meuAniversario = new Date("06/29/2023")
console.log(meuAniversario.toDateString())