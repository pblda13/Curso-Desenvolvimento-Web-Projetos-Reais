let valor = 0;
let porcetagem = 0;
let valorTotal = 0;

valor = parseFloat(prompt("Digite o valor da conta "));
porcetagem = parseFloat(prompt("Digite a gorjeta(decimal)%"));

porcetagem = (valor * porcetagem) / 100;
valorTotal = valor + porcetagem;

alert("Valor total com gorjeta é de R$ " + valorTotal);
