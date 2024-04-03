const readlineSync = require('readline-sync')

/*const nome = readlineSync.question('qual seu nome ? ')
const gmail = readlineSync.question('qual seu gmail ? ')


console.log(`O e-mail ${gmail} foi cadastrado com sucesso. Seja bem-vinda(o),${nome}! `)*/

/*console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])*/

/*let comida = ['sushi','pizza','xis','lasanha','churrasco']

const comidaNova = readlineSync.question('qual sua comida favorita ?')
comida.splice(1,1)
comida.push(comidaNova)
console.log(comida)*/

let lista = []
let p1 = readlineSync.question('qual sua primeira tarrefa ?')
let p2 = readlineSync.question('qual sua segunda tarrefa ?')
let p3 = readlineSync.question('qual sua terceira tarrefa ?')
lista.push(p1)
lista.push(p2)
lista.push(p3)
console.log(lista)
let p4 = readlineSync.question('qual vc ja fez 1,2,3 ?')
let n1 = p4-1
lista.splice(n1,1)
console.log(lista)