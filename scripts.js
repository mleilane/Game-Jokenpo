//mapeando os elementos HTML
const resultgame = document.querySelector(".resultgame"); //mapeando o elemento HTML (pela classe) que vai exibir o resultado (empate, perde ou ganha)
const playerChoiceElement = document.querySelector("#player-choice"); // mapeando o elemento HTML (pelo ID) que vai receber a escolha do usuario
const machineChoiceElement = document.querySelector("#machine-choice"); // mapeando o elemento HTML (pelo ID) que vai receber a escolha da maquina
const yourScoreElement = document.querySelector(".your-score span"); //mapeando o elemento HTML (pela classe) que vai exibir a pontuacao total do usuario
const machineScoreElement = document.querySelector(".machine-score span"); // mapeando o elemento HTML (pela classe) que vai exibir a pontuacao total da maquina

let yourScore = 0;
let machineScore = 0;

/*
humanScore -> Camel case
GAME_OPTIONS -> snake case  em ENUM usamos esse formato
*/

// ENUM
const GAME_OPTIONS = {
  PEDRA: "PEDRA",
  PAPEL: "PAPEL",
  TESOURA: "TESOURA",
};

// 1º precisamos saber quando o usuario clicar em um botão
//função para trazer a aescolha do usuario
const playHuman = (humanChoice) => {
  //console.log(humanChoice)

  playTheGame(humanChoice, playMachine()); //atribuimos a escolha do usuario ao "human" da função playTheGame e a escolha da maquina ao "machine"
};

//função para trazer a escolha da maquina
const playMachine = () => {
  const choices = [
    GAME_OPTIONS.PEDRA,
    GAME_OPTIONS.PAPEL,
    GAME_OPTIONS.TESOURA,
  ];
  const randomNumber = Math.floor(Math.random() * 3); //Math.random() da numeros aleatorios  /Math.floor arredonda o nº para baixo

  return choices[randomNumber];
};

//função para validar quem ganhou
const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  //atualiza a escolha no HTML
  playerChoiceElement.innerHTML = human;
  machineChoiceElement.innerHTML = machine;

  //criando a logica do jogo
  if (human === machine) {
    resultgame.innerHTML = "Deu empate! 😕";
  } else if (
    (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
    (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
    (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
  ) {
    resultgame.innerHTML = "Você Ganhou! 😍";
    yourScore++;
    yourScoreElement.innerHTML = yourScore;
  } else {
    resultgame.innerHTML = "Você Perdeu! 😢";
    machineScore++;
    machineScoreElement.innerHTML = machineScore;
  }
};
