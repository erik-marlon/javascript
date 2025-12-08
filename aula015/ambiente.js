let num = [1,9,0,3]
let pos = num.indexOf(3) // Busca qual a posição do elemento 3
console.log(`O elemento 2 está na posição ${pos}`)
num.push (4) // adiciona o 4 como quinto elemento na variável
num.sort()
console.log(`Nossos vetores possuem os valores ${num}`)
console.log(`E possuí o total de ${num.length} posições`)

for (let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
} // Estrutura de repetição para demonstrar todos os elementos do vetor

for (let pos in num) {
    console.log(num[pos])
} // Funciona apenas para arrays e objetos | Maneira mais simplificada
