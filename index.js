/**Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

let perfilHeroi = ["Homem Aranha", 5100];

if(perfilHeroi[1] <= 1000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Ferro`);
} else if(perfilHeroi[1] >= 1001 && perfilHeroi[1] <= 2000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Bronze`);
} else if(perfilHeroi[1] >= 2001 && perfilHeroi[1] <= 5000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Prata`);
} else if(perfilHeroi[1] >= 5001 && perfilHeroi[1] <= 7000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Ouro`);
} else if(perfilHeroi[1] >= 7001 && perfilHeroi[1] <= 8000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Platina`);
} else if(perfilHeroi[1] >= 8001 && perfilHeroi[1] <= 9000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Ascendente`);
} else if(perfilHeroi[1] >= 9001 && perfilHeroi[1] <= 10000){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Imortal`);
} else if(perfilHeroi[1] >= 10001){
  console.log(`O herói de nome ${perfilHeroi[0]} está no nível Radiante`);
}

while(perfilHeroi[1] <= 10001){
  perfilHeroi[1]++
}
console.log(`O herói de nome ${perfilHeroi[0]} está com esta pontuação: ${perfilHeroi[1]}`);




