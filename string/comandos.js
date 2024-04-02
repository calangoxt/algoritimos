let nome = 'miguel'
console.log(nome.length)//conta espaço
nome = 'MIGUEL'
console.log(nome.toLocaleLowerCase())//miguel
nome = 'miguel'
console.log(nome.toUpperCase())//MIGUEL
nome ='          miguel              '
console.log(nome.trim())//remove espaço do inicil e final da string
nome = 'miguel foi a feira'
console.log(nome.includes('miguel'))// retorna true se tem a palavra na frasse
nome = ' hj encontrei o pedro ' 
console.log(nome.replaceAll('pedro','kaua'))// troca a palavra da direita pela palavra esquerda na frasse