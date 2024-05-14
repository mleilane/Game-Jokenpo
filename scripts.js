// 1º precisamos saber quando o usuario clicar em um botão
const draw = document.querySelector(".draw"); //mapeando o elemento HTML que vai receber o resultado do empate

//função para trazer a aescolha do usuario
const playHuman = (humanChoice) => {
  //console.log(humanChoice)

  playTheGame(humanChoice, playMachine()); //atribuimos a escolha do usuario ao "human" da função playTheGame e a escolha da maquina ao "machine"
};

//função para trazer a escolha da maquina
const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3); //Math.random() da numeros aleatorios  /Math.floor arredonda o nº para baixo

  return choices[randomNumber];
};

//função para validar quem ganhou
const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    draw.innerHTML = "Deu empate!";
  }
};

