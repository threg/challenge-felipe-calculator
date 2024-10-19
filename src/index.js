function calculator(win, loss) { // - function
  let result = win - loss; // - variável + operador
  return result;
}

let winLossPairs = [ // - vetor
  { win: 143, loss: 11 },
  { win: 50, loss: 15 },
  { win: 30, loss: 20 },
  { win: 90, loss: 5 },
];

for (let i = 0; i < winLossPairs.length; i++) { // - laço de repetição
  let { win, loss } = winLossPairs[i];
  let winRate = calculator(win, loss); // - variável com paramêtro
  let elo = "";

  switch (true) { // - estrutura de decisão
    case winRate < 10:
      elo = "FERRO";
      break;
    case winRate <= 20:
      elo = "BRONZE";
      break;
    case winRate <= 50:
      elo = "PRATA";
      break;
    case winRate <= 80:
      elo = "OURO";
      break;
    case winRate <= 90:
      elo = "DIAMANTE";
      break;
    case winRate <= 100:
      elo = "LENDÁRIO";
      break;
    case winRate >= 101:
      elo = "IMORTAL";
      break;
  }

  console.log(
    `O Herói tem de saldo de ${winRate} vitórias está no nível de ${elo}` // - interpolação de string
  );
}
