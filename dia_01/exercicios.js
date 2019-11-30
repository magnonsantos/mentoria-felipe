/**
 * Utilizando o for
 * Para números de 0 a 20 (incluindo o zero e o vinte), imprima as mensagens conforme
 * as seguintes regras:
 *  Se o número for par, imprima "O número x é par";
 *  Se o número for divísivel por 3, imprima "O número x é divisível por 3"
 *  Mas caso o número seja par e divisível por 3, imprima "O número é par e também 
 * divisível por 3"
 *
 */

var resposta = ''

for(atual=0; atual<=20; atual++){
    resposta = ''
    if(atual%2 == 0)
    {
        if(atual%3 == 0)
        {
           resposta += ' É um número PAR e divisível por 3'       
        } else {
            resposta += ' É um número PAR'
        }               
    } 

    if ((resposta == '') && (atual%3 == 0))
    {
       resposta += ' É um número divisível por 3'       
    } 

    if (resposta != ''){
        console.log(atual + resposta)
    }        
}

/**
 * Utilizando o while
 * Para números de 15 a 10 (incluindo o quinze e o dez), imprima mensagens conforme 
 * as seguintes regras:
 * Se o número for divisível por 5, imprima "OK"
 * Do contrario, imprima "Não OK"
 */

var regra = 15
while(regra >= 10){
    if (regra%5 == 0){
        console.log(regra + ' Ok')
    } else {
        console.log(regra + ' Não Ok')
    }
    regra--
}
/*
// Forech

var primeiraLista = [0, 8, 5, 6, 2]
var segundaLista = [9, 3, 5, 7, 1]
var soma = primeiraLista + segundaLista
var subtracao = primeiraLista - segundaLista

console.log(primeiraLista.length)
console.log(segundaLista.length)

for()

if (primeiraLista > segundaLista){
    console.log('A soma é: ' + soma)
}else {
    console.log(subtracao)
}*/