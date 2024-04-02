const personagens = ['Asta','Sukuna','Zoro','ash','hinata']
function perso(){
let numero = Math.floor(Math.random()*personagens.length)
return personagens[numero]
}
console.log('seu personagem é :',perso())