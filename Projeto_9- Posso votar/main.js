
let age = prompt("Digite sua idade ");
let title = prompt("Você tem titulo (SIM/NÃO) ?")


if (age >= 18 && title== "SIM") {
  alert("Você pode votar");
} else if (age >= 18 && title == "NÃO") {
  alert("Você precisa de titulo");
} else if (age < 18 && title == "SIM") {
  alert("Você não pode votar");
} else {
  alert("Você não pode votar");
}
