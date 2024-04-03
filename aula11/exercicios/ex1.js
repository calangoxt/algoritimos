let array
console.log('a. ', array)//a)undefained

array = null
console.log('b. ', array)//b)null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//C) 10

let i = 0
console.log('d. ', array[i])//d)3

array[i+1] = 19
console.log('e. ', array)//[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)//9



const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");//pede para o usuario digitar uma frasse 

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);//vai deichar tudomaiuscolo troca oa 'a' pelo 'i' eira contar quantas letra tem a palavra
/`"Subi num ônibus em Marrocos"`   'SUBI NUM ONIBUS EM MIRROCOS'/