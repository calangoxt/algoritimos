const readline = require('readline');


//criando uma intancia de interface de leitura e escrita
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//solicitando ao usuario que insira sua idade
rl.question('fala um numero ',(numero)=>{
    Number(numero)
    par(numero)
rl.close();
})

function par(soma){
  
    //let soma = (n1 + n2 + n3)
    let resultado = soma % 2
    
if (resultado ===0){
    console.log('seu numero é par')
}else{
    console.log(' seu numero é impar')
} }