function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a) os numeros 10 e 50 
//b)nao ira aparecer os numeros no terminal pois nao tem o console.log

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a) compara se a pessoa escrevel "cenoura"
//b) re escrevera a frase emminusculo
